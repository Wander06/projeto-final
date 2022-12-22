import { Link } from "react-router-dom";
import '../css/Menu.css'

const Menu = () => {
    return(
        <>
            <header>
                <nav>
                    <ul className="nav-list">
                        <li><Link className="link" to='/'>Página Inicial</Link></li>
                        <li><Link className="link" to='/PagCalculadora'>Calculadora</Link></li>
                        <li><Link className="link" to='/PagCofre'>Cofre</Link></li>
                    </ul>        
                </nav>            
            </header>
        </>
    )
}

export default Menu;