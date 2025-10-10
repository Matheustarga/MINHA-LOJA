
import './index.css'
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import App from './App.jsx'
import MyRouter from "./MyRouter.jsx"; // meu gerenciador de rotas
import { RouterProvider } from 'react-router-dom'; // Provedor de rotas, do react-router
import 'bootstrap/dist/css/bootstrap.min.css'; // importação do bootstrap


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Faz o provedor utilizar as rotas que você definiu no MyRouter */}
    <RouterProvider router={MyRouter}/> 
  </StrictMode>,
)
