import React from "react";
//Importação componentes Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Image from "react-bootstrap/Image";

//Importando a função useForm do pacote react-hook-form
import { useForm } from "react-hook-form";

const FormularioProduto = (props) => {
  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados do formulario, caso dê erro ou sucesso
  //formState {erros} = objetoque guarda uma lista de erros que aconteceram na tentativa de envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="text-center">
      <Form className="mt-3 w-full" onSubmit={""}>
        <Row>
          <Col className="" md={12} lg={6}>
            {/* Caixinha de SKU */}
            <FloatingLabel controlId="FI-SKU" label="SKU" className="mb-5">
              <Form.Control
                type="text"
                {...register("sku", { 
                    required: "O SKU é obrigatório",
                    minLength:{
                        value:2,
                        message:"O SKU deve ter pelo menos dois caracteres"
                    },
                    maxLength:{
                        value:10,
                        message:"O SKU deve ter no máximo 10 caracteres"
                    }

                })}
              ></Form.Control>
              {errors.sku && <p className="error">{errors.sku.message}</p>}
            </FloatingLabel>
            {/* Fim da Caixinha de SKU */}

            {/* Caixinha de NOME */}
            <FloatingLabel controlId="FI-NOME" label="Nome" className="mb-5">
              <Form.Control
                type="text"
                {...register("nome", { 
                    required: "O Nome é obrigatório",
                    minLength:{
                        value:2,
                        message:"O Nome deve ter pelo menos dois caracteres"
                    },
                    maxLength:{
                        value:30,
                        message:"O Nome deve ter no máximo 10 caracteres"
                    }

                })}
              ></Form.Control>
              {errors.nome && <p className="error">{errors.nome.message}</p>}
            </FloatingLabel>
            {/* Fim da Caixinha de NOME */}
            {/* Caixinha de Descrição */}
            <FloatingLabel controlId="FI-DESCRICAO" label="Descrição" className="mb-5">
              <Form.Control
                type="text"
                {...register("descricao", { 
                    required: "A Descrição é obrigatório",
                    minLength:{
                        value:2,
                        message:"O Descrição deve ter pelo menos dois caracteres"
                    },
                    maxLength:{
                        value:30,
                        message:"O Descrição deve ter no máximo 10 caracteres"
                    }

                })}
              ></Form.Control>
              {errors.descricao && <p className="error">{errors.descricao.message}</p>}
            </FloatingLabel>
            {/* Fim da Caixinha de Descrição */}

            {/* Caixinha de categoria */}

            {/* Fim daCaixinha de categoria */}

            {/* Caixinha de marca */}
            <FloatingLabel controlId="FI-MARCA" label="Marca" className="mb-5">
              <Form.Control
                type="text"
                {...register("marca", { 
                    required: "A Marca é obrigatório",
                    minLength:{
                        value:2,
                        message:"A Marca deve ter pelo menos dois caracteres"
                    },
                    maxLength:{
                        value:30,
                        message:"A Marca deve ter no máximo 10 caracteres"
                    }

                })}
              ></Form.Control>
              {errors.marca && <p className="error">{errors.marca.message}</p>}
            </FloatingLabel>
            {/* FIm da Caixinha de marca */}

            {/* Caxinha de fornecedor */}
            <FloatingLabel controlId="FI-FORNECEDOR" label="Fornecedor" className="mb-5">
              <Form.Control
                type="text"
                {...register("fornecedor", { 
                    required: "A Fornecedor é obrigatório",
                    minLength:{
                        value:2,
                        message:"A Fornecedor deve ter pelo menos dois caracteres"
                    },
                    maxLength:{
                        value:30,
                        message:"A Fornecedor deve ter no máximo 10 caracteres"
                    }

                })}
              ></Form.Control>
              {errors.fornecedor && <p className="error">{errors.fornecedor.message}</p>}
            </FloatingLabel>            
            {/* Fim Caxinha de fornecedor */}

          </Col>
          <Col className="" md={12} lg={6}></Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormularioProduto;
