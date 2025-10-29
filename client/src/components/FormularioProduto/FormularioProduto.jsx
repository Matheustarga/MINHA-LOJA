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
//Importanto o hook de produtos
import { useListaCategorias, useListaMedidas } from "../../hooks/useProdutos";

const FormularioProduto = (props) => {
  //register = cria um objeto com os valores retirados dos inputs
  //handleSubmit = envia os dados do formulario, caso dê erro ou sucesso
  //formState {erros} = objetoque guarda uma lista de erros que aconteceram na tentativa de envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // lista de categorias
  const cates = useListaCategorias();
  //lista de medidas
  const medis = useListaMedidas();
  //Variavel de produto sem imagem

  const linkImagem ="https://multilit.com.br/wp-content/uploads/2020/03/Produto-sem-foto.png"

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
                  minLength: {
                    value: 2,
                    message: "O SKU deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 10,
                    message: "O SKU deve ter no máximo 10 caracteres",
                  },
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
                  minLength: {
                    value: 2,
                    message: "O Nome deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "O Nome deve ter no máximo 10 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.nome && <p className="error">{errors.nome.message}</p>}
            </FloatingLabel>
            {/* Fim da Caixinha de NOME */}
            {/* Caixinha de Descrição */}
            <FloatingLabel
              controlId="FI-DESCRICAO"
              label="Descrição"
              className="mb-5"
            >
              <Form.Control
                type="text"
                {...register("descricao", {
                  required: "A Descrição é obrigatório",
                  minLength: {
                    value: 2,
                    message: "O Descrição deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "O Descrição deve ter no máximo 10 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.descricao && (
                <p className="error">{errors.descricao.message}</p>
              )}
            </FloatingLabel>
            {/* Fim da Caixinha de Descrição */}

            {/* Caixinha de categoria */}
            <FloatingLabel
              controlId="FI-CATEGORIAS"
              label="Categoria"
              className="mb-5"
            >
              <Form.Select
                {...register("categoria", {
                  validate: (value) => value !== "0" || "Escolha uma categoria",
                })}
              >
                <option value="0">Escolha uma categoria</option>
                {cates.map((cat) => (
                  <option key={cat.id} value={cat.nome}>
                    {cat.nome}
                  </option>
                ))}
              </Form.Select>
              {errors.categoria && (
                <p className="error">{errors.categoria.message}</p>
              )}
            </FloatingLabel>
            {/* Fim daCaixinha de categoria */}

            {/* Caixinha de marca */}
            <FloatingLabel controlId="FI-MARCA" label="Marca" className="mb-5">
              <Form.Control
                type="text"
                {...register("marca", {
                  required: "A Marca é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A Marca deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "A Marca deve ter no máximo 10 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.marca && <p className="error">{errors.marca.message}</p>}
            </FloatingLabel>
            {/* FIm da Caixinha de marca */}

            {/* Caxinha de fornecedor */}
            <FloatingLabel
              controlId="FI-FORNECEDOR"
              label="Fornecedor"
              className="mb-5"
            >
              <Form.Control
                type="text"
                {...register("fornecedor", {
                  required: "A Fornecedor é obrigatório",
                  minLength: {
                    value: 2,
                    message: "A Fornecedor deve ter pelo menos dois caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "A Fornecedor deve ter no máximo 10 caracteres",
                  },
                })}
              ></Form.Control>
              {errors.fornecedor && (
                <p className="error">{errors.fornecedor.message}</p>
              )}
            </FloatingLabel>
            {/* Fim Caxinha de fornecedor */}
          </Col>
          <Col className="" md={12} lg={6}>
            {/* Caixinha de quantidade */}
            <FloatingLabel
              controlId="FI-QUANTIDADE"
              label="Quantidade"
              className="mb-5"
            >
              <Form.Control
                type="number"
                {...register("quantidade", {
                  required: "A quantidade é obrigatório",
                  min: {
                    value: 1,
                    message: "A quantidade deve ser maior que zero",
                  },
                })}
              ></Form.Control>
              {errors.quantidade && (
                <p className="error">{errors.quantidade.message}</p>
              )}
            </FloatingLabel>
            {/*FIM Caixinha de quantidade */}
            <Row>             
              {/*primeira linha */}
              <Col>              
                {/*primeira coluna */}
                {/* Inicio da caixinha de tamanho */}
                <FloatingLabel
                  controlId="FI-TAMANHO"
                  label="Tamanho"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("tamanho", {
                      required: "O tamanho é obrigatório",
                      minLength: {
                        value: 2,
                        message:
                          "O tamanho deve ter pelo menos dois caracteres",
                      },
                      maxLength: {
                        value: 30,
                        message:
                          "O tamanho deve ter no máximo 10 caracteres",
                      },
                    })}
                  ></Form.Control>
                  {errors.tamanho && (
                    <p className="error">{errors.tamanho.message}</p>
                  )}
                </FloatingLabel>
                {/* Fim da caixinah de tamanho */}
              </Col>
              <Col>
                {/* Caixinha de medidas */}
                <FloatingLabel
                  controlId="FI-MEDIDAS"
                  label="Medida"
                  className="mb-5"
                >
                  <Form.Select
                    {...register("medida", {
                      validate: (value) => value !== "0" || "Escolha uma medida",
                    })}
                  >
                    <option value="0">Escolha uma medida</option>
                    {medis.map((med) => ( <option key={med.id} value={med.nome}>{med.nome}</option>
                    ))}
                  </Form.Select>
                  {errors.medida && (
                    <p className="error">{errors.medida.message}</p>
                  )}
                </FloatingLabel>
                {/* Fim daCaixinha de medidas */}             
              </Col>
            </Row>
            <Row>{/*Segunda linha */}
              {/*segunda linha */}
              <Col>
              {/* Caixinha preco de custo */}
                <FloatingLabel
                  controlId="FI-PC"
                  label="Preço de custo"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("precoCusto", {
                      required: "O Preço de custo é obrigatório",
                      min: {
                        value: 0.01,
                        message:
                          "O Preço de custo deve ser maior que zero",
                      }

                    })}
                  ></Form.Control>
                  {errors.precoCusto && (
                    <p className="error">{errors.precoCusto.message}</p>
                  )}
                </FloatingLabel>
              {/*Fim Caixinha preco de custo */}
              </Col>
              <Col>
              {/* Caixinha preco de venda */}
                <FloatingLabel
                  controlId="FI-PV"
                  label="Preço de venda"
                  className="mb-5"
                >
                  <Form.Control
                    type="number"
                    {...register("precoVenda", {
                      required: "O Preço de Venda é obrigatório",
                      min: {
                        value: 0.01,
                        message:
                          "O Preço de venda deve ser maior que zero",
                      }

                    })}
                  ></Form.Control>
                  {errors.precoVenda && (
                    <p className="error">{errors.precoVenda.message}</p>
                  )}
                </FloatingLabel>
              {/*Fim Caixinha preco de venda */}
              </Col>
            </Row>
            {/* Caixinha de imagem */}
            <Form.Group controlId="FI-IMAGEM" className="mb-5">
              <FloatingLabel controlId="FI-IMAGEM" label="Link da imagem" className="mb-5">
                  <Form.Control
                    type="url"
                    {...register("imagemUrl",{
                      required:"O link é obrigatório",
                      pattern:{
                        value:/^(http|https):\/\/[^"]+$/,
                        message:"Insira um link válido"
                      }})}>
                  </Form.Control>
                  {errors.imagemUrl && (<p className="error">{errors.imagemUrl.message}</p>)}
              </FloatingLabel>
              <Image width={200} height={200} rounded src={linkImagem} />              
            </Form.Group>       
            {/* fim da Caixinha de imagem */}
          </Col>
        </Row>
        {/* Botão para envio do formulário */}
        <Button variant="primary" size="lg" type="submit">
          {props.page ==="editar" ? "Atualizar" : "Cadastrar"}
        </Button>
      </Form>
    </div>
  );
};

export default FormularioProduto;
