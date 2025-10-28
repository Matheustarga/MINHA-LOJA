import React from 'react'
import { createBrowserRouter} from "react-router-dom"
//importação das páginas principais
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Login from "./pages/Login.jsx";
import RotasProtegidas from "./pages/RotasProtegidas.jsx";
import Home from "./pages/Home.jsx";

//Importação páginas produto
import VerProdutos from './pages/Produtos/VerProdutos.jsx';
import CadastrarProduto from './pages/Produtos/CadastrarProduto.jsx';
import EditarProduto from './pages/Produtos/EditarProduto.jsx';

//aqui passaremos as rotas
const router = createBrowserRouter([
    {//elemento pai
        path:"/",
        element:<App />, //elemento rederizado ao acessar a rota
        errorElement: <PaginaErro />,
        children:[      //Aqui criamos as rotas que são filhas dessa rota
            {
                index: true,
                element:<Login />
            },
            {
                path:"login",
                element: <Login />
            }
        ]
    },
    {
        path:"/",
        element:<RotasProtegidas />,
        errorElement:<PaginaErro />,
        children:[
            {
                path:"home",
                element: <Home />
            },
            {
                path:"produtos",
                children:[
                    {
                        index: true,
                        element: <VerProdutos />
                    },
                    {
                        path: "cadastrar",
                        element: <CadastrarProduto/>
                    },
                    {
                        path:"editar/:id",
                        element: <EditarProduto />

                    }
                ]
            }
        ]
    }
])

export default router


