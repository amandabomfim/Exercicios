import { useParams } from "react-router-dom";
import { ListaAparelhos } from "../components/ListaAparelhos";

export default function VisualizarAparelho() {
  document.title = "Visualizar Aparelho";

  const { id } = useParams();

  const aparelhoEncontrado = ListaAparelhos.find((aparelho) => aparelho.id === parseInt(id));

  return (
    <>
      <div>
        <h1>VISUALIZAR APARELHO</h1>
        {aparelhoEncontrado ? (
          <div>
            <h3>Nome do Aparelho: {aparelhoEncontrado.nome}</h3>
            <img src={aparelhoEncontrado.foto} alt={aparelhoEncontrado.nome} />
            <p>DESCRIÇÃO: {aparelhoEncontrado.desc}</p>
            <button>COMPRAR</button>
            
          </div>
        ) : (
          <p>Aparelho não encontrado.</p>
        )}
      </div>
    </>
  );
}
