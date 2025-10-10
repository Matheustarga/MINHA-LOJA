import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const RotasProtegidas = () => {
  //Variável para saber se está logado ou não
  const estaLogado = true;
  //caso não esteja, redireciona para tela de login
  if(!estaLogado){
    return <Navigate to="/login"/>
  }

  return (
    <div className='App'>
      {/* Barra de navegação lateral */}
      <div>
        <h1>Barra de navegação</h1>
      </div>
      {/* Conteudo principal, dependendo de qual rota está */}
      <div>
        <h1>Conteúdo Principal</h1>
      </div>      
    </div>
  )
}

export default RotasProtegidas
