import styles from "./Servicos.module.scss";
import Card from "../../Components/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Servicos() {
  return (
    <div>
      <Navbar />
      <div className={styles.servicos}>
        <Card
          title="Pintor"
          description={
            <p>
              Serviços de pintura interna e externa, preparação de superfícies,
              aplicação de texturas e vernizes. Trabalho com materiais de
              qualidade para um acabamento perfeito e durável.
            </p>
          }
          link="https://exemplo.com/pintura"
        />

        <Card
          title="Eletricista"
          description={
            <p>
              Instalações, manutenções preventivas e corretivas, reparos em
              quadros de força, tomadas, interruptores e circuitos elétricos.
              Atendimento residencial, comercial e industrial com total
              segurança.
            </p>
          }
          link="https://exemplo.com/pintura"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Servicos;
