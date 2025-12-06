
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <aside className="w-64 bg-gray-800 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Gemini</h1>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <span>Nova conversa</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <span>Meus itens</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
                <span>Gems</span>
              </a>
            </li>
            <li className="mb-4">
              <p className="text-gray-400 text-sm">Conversas</p>
              <ul>
                <li className="mt-2">
                  <a href="#" className="block p-2 rounded-md hover:bg-gray-700">O que é LangChain e suas Aplicações</a>
                </li>
                <li className="mt-2">
                  <a href="#" className="block p-2 rounded-md hover:bg-gray-700">Remover Status Estudante Google</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default Layout;
