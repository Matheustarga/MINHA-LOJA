//url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect } from "react";

export function useListaCategorias(){
    //Variável para armazenar as categorias
    const [categorias, setCategorias]=useState([])
    //Puxa os dados da API assim que o componente é iniciado
    useEffect(()=>{
        async function fetchCategorias() {
            try{
                //Fetch abre a conexão com a api, na rota especificada e guarda a resposta em req
                const req = await fetch(`${url}/categorias`);
                // Como a resposta vem em texto, preciso converter para json para utilizar
                const res = await req.json();
                //Assim que tiver convertido, gurda na variável criada para guardar as categorias
                setCategorias(res)
            }
            // se tiver erro na tentativa de conexão com a api, mostra qual foi o erro no console
            catch(erro){
                console.log(erro.message);                
            }
        }
        //Executa a função de buscar as categorias na api
        fetchCategorias();
    },[])
    //retorna pra quem chamou a função, alista de categorias já preenchida
    return categorias
}

export function useListaMedidas(){
    //lista com medida
    const [medidas] = useState([
        {
            id:1,
            nome:"mL"                     
        },
        {
            id:2, 
            nome:"L"
        }
    ])

    return medidas
}