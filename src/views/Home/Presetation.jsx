import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Presentation.module.scss";
import ButtonA from "../../Components/ButtonA";
const Presentation = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.presentation}>
        <h1> M & R manutenção e instalação elétrica </h1>{" "}
        <p>
          Olá! Sou o Milton Mori. <br />
          Há 25 anos, ajudo famílias e empresas a renovarem seus espaços com
          segurança e qualidade. <br />
          Precisa de um serviço bem feito, sem dor de cabeça? <br /> Eu garanto
          um trabalho impecável, seguro e, acima de tudo, limpo. <br /> Do
          acabamento da pintura à instalação elétrica, cuido da sua casa como se
          fosse a minha.
        </p>{" "}
        <ButtonA link={"/contactForm"} text="Entre em contato" />
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Presentation;
