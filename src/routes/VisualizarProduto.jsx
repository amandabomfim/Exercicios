import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function VisualizarProdutos() {

  document.title = "Visualizar Produtos";

  
  const {id} = useParams();

    
    const prodRecuperadoPorId = ListaProdutos.filter( (produto) => {
        if(produto.id == id){
          return produto;
        }
    });

    const handlerEditarProduto = (event) => {
        event.preventDefault();
    }

  return (
    <>
        <div>
            <h1>VISUALIZAR PRODUTO</h1>
              <fieldset>

                <div>
                  <button >COMPRAR</button>
                </div>
              </fieldset>
        </div>
    </>
  )
}