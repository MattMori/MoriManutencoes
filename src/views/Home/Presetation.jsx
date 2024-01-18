import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Presentation.module.scss';
import ButtonA from '../../Components/ButtonA';
const Presentation = () => {

    return (
        <div >
            <Navbar />
            <div className={styles.presentation}>
                <h1>Mori: Serviços Gerais</h1>
                <p>
                    Bem-vindo! Sou Milton Mori, profissional com 25 anos<br />
                    de experiência nas áreas de elétrica e pintura.<br />
                    Minha dedicação se reflete em serviços impecáveis,<br />
                    sempre pautados pela limpeza, organização e,<br />
                    acima de tudo, qualidade e segurança.<br />
                </p>
                <ButtonA link={'/contactForm'} text='Entre em contato' />

            </div>
            <Footer />
        </div>
    )
};

export default Presentation

