import { Link } from "react-router-dom";
import { ListaAparelhos} from "../components/ListaAparelhos";
import {AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import "./Aparelhos.css";

export default function Aparelhos() {

  return (
    <>
        <div>
            <h1>APARELHOS</h1>

            <table className="tabela">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                    <th>Visualizar</th>

                </tr>
            
                {ListaAparelhos.map( (aparelho, indice)=>(
                        <tr key={indice}>
                            <td>{aparelho.id}</td>
                            <td>{aparelho.nome}</td>
                            <td>{aparelho.preco}</td>
                            <td> <Link to={`/visualizar/aparelho/${aparelho.id}`}>Visualizar</Link></td>
                        </tr>
                ))}
            </table>

        </div>
    </>
  )
}