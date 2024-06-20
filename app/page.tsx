import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
}
from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px]">
        <CardHeader>
          <CardTitle>Conversa com IA</CardTitle>
          <CardDescription>Usando o SDK Vercel para criar um robô de conversa</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Mensagens</p>
        </CardContent>
        <CardFooter>
          form
        </CardFooter>
      </Card>
    </div>
  );
}
