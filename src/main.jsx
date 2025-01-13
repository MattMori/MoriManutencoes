import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando os componentes para serem renderizados nas rotas
import Presentation from '../src/views/Home/Presetation';
import Servicos from '../src/views/serviços/Servicos';
import ContactForm from '../src/views/ContactForm/ContactForm';

// Configurando as rotas do aplicativo
const router = createBrowserRouter([
  {
    path: "/", // Caminho da rota raiz
    element: <Presentation />, // Componente a ser renderizado quando a rota é acessada
  },
  {
    path: "/servicos", // Caminho da rota de serviços
    element: <Servicos />, // Componente a ser renderizado quando a rota é acessada
  },
  {
    path: "/contactForm", // Caminho da rota de formulário de contato
    element: <ContactForm />, // Componente a ser renderizado quando a rota é acessada
  },
]);

// Renderizando o roteador com as rotas configuradas
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
