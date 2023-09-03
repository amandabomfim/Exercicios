import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import {AiOutlineEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import "./Produtos.css";

export default function Produtos() {

  return (
    <>
        <div>
            <h1>PRODUTOS</h1>

            <table className="tabela">
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PREÇO</th>
                    <th>Visualizar</th>

                </tr>
            
                {ListaProdutos.map( (produto, indice)=>(
                        <tr key={indice}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco}</td>
                            <td> <Link to={`/visualizar/produto/${produto.id}`}>Visualizar</Link></td>
                        </tr>
                ))}
            </table>

        </div>
    </>
  )
}