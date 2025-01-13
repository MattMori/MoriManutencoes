import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'
const Navbar=()=> {
    return(

    <div className={styles.navbar}>
        <h1>Mori Soluções</h1>
        <ul>
            <li>
            <Link to={'/'}>Inicio</Link>
            </li>
            <li>
            <Link to={'/servicos'}>Serviços Oferecidos</Link>
            </li>
            <li>
            <Link to={'/contactForm'}>Fale Conosco</Link>
            
            </li>
        </ul>
    </div>
)}

export default Navbar