import React, { FC } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from "./ui/avatar";

interface MessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const Message: FC<MessageProps> = ({ role, content }) => (
  <div className="flex gap-3 text-slate-600 text-sm mb-4">
    {role === 'user' && (
      <Avatar>
        <AvatarFallback></AvatarFallback>
        <AvatarImage src="https://avatars.githubusercontent.com/u/59674527?v=4"/>
      </Avatar>
    )}

    {role === 'assistant' && (
      <Avatar>
        <AvatarFallback></AvatarFallback>
        <AvatarImage src="https://i.postimg.cc/rp6SwKw0/SimDig.png"/>
      </Avatar>
    )}

    <p className="leading-relaxed">
      <span className="block font-bold text-slate-700">{role === 'user' ? 'Usuário' : 'IA'}</span>
      {content}
    </p>
  </div>
);
