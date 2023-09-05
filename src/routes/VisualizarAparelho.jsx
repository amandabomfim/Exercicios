import { useParams } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos";

export default function VisualizarAparelho() {
  document.title = "Visualizar Aparelho";

  
  const {id} = useParams();

    
    const prodRecuperadoPorId = ListaAparelhos.filter( (aparelho) => {
        if(aparelho.id == id){
          return aparelho;
        }
    });

    const handlerVisualizarAparelho = (event) => {
        event.preventDefault();
    }

  return (
    <>
        <div>
            <h1>VISUALIZAR APARELHO</h1>
                <div>
                  <button >COMPRAR</button>
                </div>
        </div>
    </>
  )
}