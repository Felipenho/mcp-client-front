
import React from 'react';

const Suggestions = () => {
  const suggestions = [
    'Criar imagem',
    'Crie um vídeo',
    'Escrever algo',
    'Me ajude a aprender',
    'Melhore meu dia',
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {suggestions.map((suggestion, index) => (
        <button key={index} className="bg-gray-700 text-white px-4 py-2 rounded-full">
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default Suggestions;
