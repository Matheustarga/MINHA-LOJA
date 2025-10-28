//Importando o componente
import { Container } from 'react-bootstrap'
import FormularioProduto from '../../components/FormularioProduto/FormularioProduto.jsx'


//Importando o componente do bootstrap
const CadastrarProduto = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center'>Cadastro Produto</h1>
        <FormularioProduto page="cadastro"/>
      </Container>
      
    </div>
  )
}

export default CadastrarProduto
