
'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  return (
    <SyntaxHighlighter language={language} style={coldarkDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
