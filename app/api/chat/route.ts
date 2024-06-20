import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

const companyInfo = `
Endereço: Q. 303 Sul, AV LO 09, Lote 29-A, Sala 16
Fundação: 2017, mas desde 2008 trabalhamos no ramo
Site: romãocorretora.com.br
Midias: @romaocorretora
Telefones para contato: 63984429244, 63984412856
Horário de atendimento: 24 horas
Bio: A Romão Corretora trabalha com todas as grandes seguradoras que atuam no Brasil, nas mais diferentes áreas se importando com o bem estar do cliente para o deixar seguro.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const contextMessage = `
    **Importante:** Por favor, limite suas perguntas a tópicos relacionados à Romão Corretora e ao ramo de corretagem de seguros.

    Para saber mais sobre a empresa, acesse nosso site: romãocorretora.com.br
  `;

  messages.push({
    role: 'user',
    content: contextMessage,
  });

  const lastMessage = messages[messages.length - 1].content;
  const messageWithContext = `${lastMessage}\n\n[Contexto da empresa:\n${companyInfo}]`;
  messages[messages.length - 1].content = messageWithContext;

  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
  });

  return result.toAIStreamResponse();
}
