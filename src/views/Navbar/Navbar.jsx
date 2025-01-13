import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar=()=> {
    return(

    <div className={styles.navbar}>
        <h1>Mori </h1>
        <ul>
            <li>
            <Link to={'/'}>Inicio</Link>
            </li>
            <li>
            <Link to={'/servicos'}>Meus Serviços</Link>
            </li>
            <li>
            <Link to={'/contactForm'}>Contato</Link>
            
            </li>
        </ul>
    </div>
)}

export default Navbar