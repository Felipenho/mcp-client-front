
import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-700">
      <h2 className="text-xl font-bold">Olá, Luiz Felipe</h2>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Faça upgrade para o Google AI Plus</button>
      </div>
    </header>
  );
};

export default Header;
