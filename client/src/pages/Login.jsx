//Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { useContext, useEffect, useState } from "react";

//importação icone login
import { BsSteam } from "react-icons/bs";
//importando o hook para verificar o login, vindo de useUsuarios
import { useVerificaLogin } from "../hooks/useUsuarios";
//Importando a função useForm do pacote react-hook-form
import { useForm } from "react-hook-form";
//Importando o useState para tratar de variáveis
// import {useState} from "react"
//import { useContext,useEffect,useState } from 'react';
//importação do Navigate para transitar entra as páginas

import { useNavigate } from "react-router-dom";
//Importa as informações do contexto autenticação de usuário
import { AuthContext } from "../contexts/UserContext";





const Login = () => {
  //Usa as variaveis de contexto do usuario
  const {logout } = useContext(AuthContext)
  //assim que entrar na pagina, o localStorage é resetado
    useEffect(() =>{
        logout();
    },[])

  const navigate = useNavigate()
  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados do formulario, caso dê erro ou sucesso
  //formState {erros} = objetoque guarda uma lista de erros que aconteceram na tentativa de envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //varaivel da classe do alert
  const [alertaClasse, setAlertaClasse] = useState("d-none")

  const {verificaLogin} = useVerificaLogin()
  //caso o envio dê certo
  //data = objeto com todas as informações preenchidas nos campos do formulário
  const onSubmit = (data) => {
    console.log("Dados enviados: ", data);
    const resposta = verificaLogin(data)
    //caso a resposta seja positiva mostra o alerta e leva ele pra home
    if(resposta === "Login Efetuado com sucesso"){
      alert(resposta)
      navigate("/home")
    }else//se não, envia o alerta para exibir
      {
      setAlertaClasse("my-3 w-75 mx-auto")
    }
  };
  // caso o envio dê errado
  //erros = objeto com todos os erros do envio
  const onError = (erros) => {
    console.log("Erros: ", erros);
  };

  return (
    <div>
      <Container className="justify-content-center align-content-center min-vh-100">
        {/* Linha para os campos de login */}
        <Row className="bg-secondary">
          {/* coluna para o ícone da página */}
          <Col>
            {/* <BsBoxArrowInRight style={{fontSize:"500px", color:"white"}}/> */}
            <BsSteam style={{ fontSize: "500px" }} />
          </Col>
          {/* Coluna para os campos de login */}
          <Col className="d-flex flex-column">
            <Form
              style={{
                width: "75%",
                margin: "auto",
                textAlign: "center",
                paddingTop: "10px",
              }}
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              {/* Caixinha de email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Email"
                className="mb-5"
              >
                <Form.Control
                  type="email"
                  {...register("email", {
                    // torna o campo obrigatorio
                    required: "O email é obrigatório",
                    // Cria uam validação para o campo de email
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                      message: "Email inválido",
                    },
                    validate: (value) =>
                      value.includes("@") || "Email deve possuir um @",
                  })}
                />
                {errors.email && (<p className="error">{errors.email.message}</p>)}
              </FloatingLabel>
              {/* Fim de Caixinha de email */}
              {/*Caixinha de senha */}
              <FloatingLabel
                controlId="inputSenha"
                label="Senha"
                className="mb-5"
              >
                <Form.Control type="password" 
                  {...register("senha",{
                    required:"A senha é obrigatória"
                  })}
                />
                {errors.senha && (<p className="error">{errors.senha.message}</p>)}
              </FloatingLabel>
              {/*Fim da Caixinha de senha */}

              {/* Botão para envio */}
              <Button variant="dark" type="submit" className="mb-5" size="lg">
                Login
              </Button>
              {/* Fim do Botão para envio */}

              {/* Alerta caso haja algum erro */}
              <Alert variant="danger" className={alertaClasse}>
                Usuário ou senha inválidos
              </Alert>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
