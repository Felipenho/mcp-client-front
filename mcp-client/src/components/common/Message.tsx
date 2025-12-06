
import React from 'react';

interface MessageProps {
  type: 'user' | 'gemini';
  text: string;
}

const Message = ({ type, text }: MessageProps) => {
  const isUser = type === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`p-4 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-700'}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
