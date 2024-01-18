import styles from './Servicos.module.scss'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Servicos() {
    return (
        <div>
            <Navbar />
            <div className={styles.servicos}>
                <Card
                    title='Pintura'
                    description={
                        <ul>
                            <li>impermeabilização</li>
                            <li>Massa corrida</li>
                            <li>Parede de Cimento/marmorato</li>
                            <li>Grafiato/granfino/granilite</li>
                            <li>textura rolada</li>
                        </ul>
                    }
                />

                <Card
                    title='Eletrica'
                    description={
                        <ul>
                            <li>Montagem de luminarias</li>
                            <li>circuitos de emergencia</li>
                            <li>Manutenções prediais</li>
                            <li>leitura e interpretação de desenhos</li>
                            <li>implantações</li>
                        </ul>
                    }
                />                
            </div>
            <Footer />
        </div>
    )
}

export default Servicos