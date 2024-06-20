import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
}
from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Avatar,
  AvatarFallback,
  AvatarImage
} from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Conversa com IA</CardTitle>
          <CardDescription>Usando o SDK Vercel para criar um robô de conversa</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback></AvatarFallback>
              <AvatarImage src="https://avatars.githubusercontent.com/u/59674527?v=4"/>
            </Avatar>
            <p className="leading-relaxed text-justify">
              <span className="block font-bold text-slate-888">Usuário:</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec justo id orci cursus tristique. Sed at nibh et augue viverra laoreet ut vel nisi. Duis ut lorem ut nulla laoreet tincidunt. Nulla facilisi. Cras suscipit interdum sem, ac cursus libero tristique eget. Integer nec ligula id justo efficitur elementum. Praesent eget diam at ligula cursus fringilla. Maecenas a tincidunt felis. Suspendisse potenti. Etiam interdum, erat nec cursus dignissim, augue sapien tincidunt quam, a fermentum metus libero sit amet justo. Fusce eget quam nec est aliquet auctor. Nulla facilisi. Donec ullamcorper risus vitae magna tempor, non placerat lectus cursus.
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback></AvatarFallback>
              <AvatarImage src="https://i.postimg.cc/rp6SwKw0/SimDig.png"/>
            </Avatar>
            <p className="leading-relaxed text-justify">
              <span className="block font-bold text-slate-888">Assistente:</span>
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>

          <div>

          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="Como posso ajudar?" />
          <Button type="submit">Enviar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
