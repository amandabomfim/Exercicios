import { Link } from "react-router-dom";

export default function Cabecalho(){

    return(
        <>
            <header className="cabecalho">
                <h1>Loja de Smartphones e Tablets</h1>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/aparelhos">APARELHOS</Link></li>
                    
                </ul>
    
            </header>

        </>
    )
}