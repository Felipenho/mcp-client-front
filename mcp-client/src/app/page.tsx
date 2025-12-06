
'use client';

import React, { useState } from 'react';
import Layout from '@/components/common/Layout';
import Header from '@/components/common/Header';
import Message from '@/components/common/Message';
import Suggestions from '@/components/common/Suggestions';
import Input from '@/components/ui/Input';
import CodeBlock from '@/components/common/CodeBlock';

const Page = () => {
  const [messages, setMessages] = useState([
    {
      type: 'gemini',
      text: 'Olá, Luiz Felipe. Como posso te ajudar hoje?',
    },
    {
      type: 'user',
      text: 'Me mostre um exemplo de um componente de botão em React com typescript e styled-components.',
    },
    {
      type: 'gemini',
      text: 'Claro! Aqui está um exemplo de um componente de botão simples usando React, TypeScript e styled-components:',
      code: `
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const App = () => (
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);

export default App;
      `,
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { type: 'user', text: inputValue }]);
      setInputValue('');
      // TODO: Add logic to send message to Gemini API and receive response
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <Message key={index} type={message.type} text={message.text}>
              {message.code && <CodeBlock code={message.code} language="tsx" />}
            </Message>
          ))}
          <Suggestions />
        </div>
        <div className="p-4">
          <Input value={inputValue} onChange={setInputValue} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </Layout>
  );
};

export default Page;
