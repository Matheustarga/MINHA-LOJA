//Importando o css da barra de navegação
import styles from "./BarraNavegacao.module.css";

//Importando os compenentes do bootstrap
import { Nav, Navbar, NavDropdown, Image, Accordion } from "react-bootstrap";

//Importando os links do router
import { NavLink } from "react-router-dom";

//importanto as informações do contexto autenticação de usuário
import { AuthContext } from "../../contexts/UserContext";
import { useContext } from "react";

//Importando icons
import { BsBoxes } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlinePersonAdd } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
import { BsBuildingAdd } from "react-icons/bs";
import { HiArchiveBox } from "react-icons/hi2";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";
import { FaBoxOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaTachometerAlt } from "react-icons/fa";

const BarraNavegacao = () => {
  //importar o nome de usuario logado e
  const { usuarioNome, logout } = useContext(AuthContext);

  //Guarda o id do usuário atual
  const idAtual = localStorage.getItem("id");

  //Guarda a imagem do usuário
  const imagemAtual = localStorage.getItem("imagemPerfil");

  //Imagem padrão
  const semImagem = "https://cdn-icons-png.flaticon.com/512/17/17004.png";
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark min-vh-100 max-vh-100"style={{ width: "250px" }}>
      {/* Logo da empresa */}
      <Navbar.Brand as={NavLink} to="/home" className="text-white mb-3">
        <BsBoxes className="fs-4"/>
        <span className="fs-5 ms-2">C&G Solutions</span>
      </Navbar.Brand>
      {/* Opções de menu */}
      <Nav className="flex-column mb-auto">

        {/* Opção home */}
        <Nav.Link className="text-white px-2" as={NavLink} to="/home">
          <FaHome className="fs-4 "/>
          <span className="fs-5 ms-2">Home</span>          
        </Nav.Link>



        {/* Criando o accrdion */}
        <Accordion flush className="flex-column mb-auto">

          {/* Páginas produtos */}
          <Accordion.Item className="bg-dark text-white" eventKey="0">
            <Accordion.Header className={styles.accordionHeader}>
              <BsBoxes className="fs-4 " />
              <span className="ms-2"> Produtos </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/produtos" className="text-white ps-4">
                  <FaRegListAlt className="fs-5 " />
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/produtos/cadastrar" className="text-white ps-4">
                  <IoIosAddCircleOutline className="fs-5 " />
                  <span className="ms-2"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          {/* Fim de produtos */}

          {/* página de Clientes */}
          <Accordion.Item className="bg-dark text-white" eventKey="1">
            <Accordion.Header className={styles.accordionHeader}>
              <IoPeopleOutline className="fs-4 " />
              <span className="ms-2"> Clientes </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/clientes" className="text-white ps-4">
                  <PiUserListBold  className="fs-5 " />
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/clientes/cadastrar" className="text-white ps-4">
                  <MdOutlinePersonAdd className="fs-5 " />
                  <span className="ms-2"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>          
          {/* Fim página de Clientes */}

          {/* página de funcionarios */}
          <Accordion.Item className="bg-dark text-white" eventKey="2">
            <Accordion.Header className={styles.accordionHeader}>
              <BsBuilding className="fs-4 " />
              <span className="ms-2"> Funcionários </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/funcionarios" className="text-white ps-4">
                  <BsBuildingGear className="fs-5 " />
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/funcionarios/cadastrar" className="text-white ps-4">
                  <BsBuildingAdd className="fs-5 " />
                  <span className="ms-2"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>           
          {/* Fim página de funcionarios */}
          {/* Página de pedidos */}
          <Accordion.Item className="bg-dark text-white" eventKey="3">
            <Accordion.Header className={styles.accordionHeader}>
              <HiArchiveBox className="fs-4 " />
              <span className="ms-2"> Pedidos </span>
            </Accordion.Header>
            <Accordion.Body className={`p-0 bg-dark ${styles.accordionBody}`}>
              <Nav className="flex-column">
                {/* Opção 1 */}
                <Nav.Link as={NavLink} to="/Pedidos" className="text-white ps-4">
                  <FaBoxOpen className="fs-5 " />
                  <span className="ms-2"> Listar </span>
                </Nav.Link>
                {/* Opção 2 */}
                <Nav.Link as={NavLink} to="/Pedidos/cadastrar" className="text-white ps-4">
                  <HiArchiveBoxArrowDown className="fs-5 " />
                  <span className="ms-2"> Adicionar </span>
                </Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>            
          {/* Fim dapágina de pedidos */}

        </Accordion>
        {/* Opção relatórios */}
        <Nav.Link className="text-white px-2" as={NavLink} to="/home">
          <FaTachometerAlt className="fs-4 "/>
          <span className="fs-5 ms-2">Relatórios</span>          
        </Nav.Link>
      </Nav>

      <hr className="border-secondary"/>
      {/* Visualizar foto e nome do perfil, e opções */}
      <Nav className="dropdwon pb-4">
        <NavDropdown title={ 
          <span className="text-white align-items-center"> 
          <Image src={imagemAtual == "null" ? semImagem : imagemAtual} width={66} height={66} roundedCircle className="me-3"/>
          {usuarioNome}
          </span>
        } menuVariant="dark">
          
          {/* Opção de editar o perfil */}
          <NavDropdown.Item as={NavLink} to={`/funcionarios/editar/${idAtual}`}>
            Editar
          </NavDropdown.Item>
          {/* Voltar para tela de login */}
          <NavDropdown.Item as={NavLink} to={`/login`} onClick={logout}>
            Sair
          </NavDropdown.Item>

        </NavDropdown>
      </Nav>
    </div>
  );
};

export default BarraNavegacao;
