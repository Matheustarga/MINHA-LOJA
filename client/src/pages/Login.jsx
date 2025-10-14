import React from "react";
//Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
//importação icone login
import { BsSteam } from "react-icons/bs";


//importando o hook para verificar o login, vindo de useUsuarios
import { useVerificaLogin } from "../hooks/useUsuarios";
//Importando a função useForm do pacote react-hook-form
import { useForm } from "react-hook-form";



const Login = () => {
        //register = cria um objeto com os valores retirados dos inputs
        //handleSubmit = envia os dados do formulario, caso dê erro ou sucesso
        //formState {erros} = objetoque guarda uma lista de erros que aconteceram na tentativa de envio
  const {register, hendleSubmit, formState: {erros} }=useForm();

  //caso o envio dê certo
  //data = objeto com todas as informações preenchidas nos campos do formulário
  const onSubmit = (data) => {
    console.log("Dados enviados: ", data);
    
  };
  // caso o envio dê errado
  //erros = objeto com todos os erros do envio
  const onError= (erros)=> {
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
            <BsSteam style={{fontSize:"500px"}}/>
          </Col>
          {/* Coluna para os campos de login */}
          <Col className="d-flex flex-column">
            <Form style={{width:"75%", margin:"auto", textAlign:"center", paddingTop:"10px"}}>
              {/* Caixinha de email */}
              <FloatingLabel
                controlId="inputEmail"
                label="Email"
                className="mb-5"
              >
                <Form.Control type="email" />
              </FloatingLabel>
              {/* Fim de Caixinha de email */}
              {/*Caixinha de senha */}
              <FloatingLabel controlId="inputSenha" label="Senha" className="mb-5">
                <Form.Control type="password"/>
              </FloatingLabel>
              {/*Fim da Caixinha de senha */}

              {/* Botão para envio */}
              <Button variant="dark" type="submit" className="mb-5" size="lg">
                Login
              </Button>
              {/* Fim do Botão para envio */}

              {/* Alerta caso haja algum erro */}
              <Alert variant="danger" className="my-3">
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
