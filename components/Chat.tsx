'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
}
from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from "./ui/avatar";
import { useChat } from "ai/react";
import { ScrollArea } from "@radix-ui/react-scroll-area";


export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
      api: '/api/chat',
    })

    return (
        <Card className="w-[440px]">
        <CardHeader>
          <CardTitle>Conversa com IA</CardTitle>
          <CardDescription>Usando o SDK Vercel para criar um robô de conversa</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-5">
            { messages.map(message => {
              return (
                <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                  {message.role === 'user' && (
                    <Avatar>
                      <AvatarFallback></AvatarFallback>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/59674527?v=4"/>
                    </Avatar>
                  )}

                  {message.role === 'assistant' && (
                    <Avatar>
                      <AvatarFallback></AvatarFallback>
                      <AvatarImage src="https://i.postimg.cc/rp6SwKw0/SimDig.png"/>
                    </Avatar>
                  )}

                  <p className="leading-relaxed">
                    <span className="block font-bold text-slate-700">{message.role === 'user' ? 'Usuário' : 'IA'}</span>           
                    {message.content}
                  </p>

                </div>
              )
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form className="w-full flex gap-2" onSubmit={handleSubmit}>
            <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange}/>
            <Button type="submit">Enviar</Button>
          </form>
        </CardFooter>
      </Card>
    )
}