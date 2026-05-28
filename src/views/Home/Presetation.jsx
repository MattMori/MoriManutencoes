import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Presentation.module.scss";
import ButtonA from "../../Components/ButtonA";

const Presentation = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        <section className={styles.heroCard}>
          <h1>
            MoriService: <br />
            Engenharia e Manutenção Elétrica de Alta Performance.
          </h1>

          <p className={styles.lead}>
            Sou Milton Mori. Há 25 anos, garanto a infraestrutura e a segurança
            de residências e empresas através de serviços elétricos de alta
            complexidade, baseados estritamente nas normas técnicas (NR-10 e NBR
            5410) e com execução impecável.
          </p>

          <p className={styles.description}>
            O segredo de uma instalação confiável está no rigor técnico. Entrego
            projetos elétricos complexos, diagnósticos de panes, montagem de
            painéis e automação com cronograma à risca. Meu diferencial
            inegociável: diagnóstico preciso, conformidade de segurança e zero
            dor de cabeça do início ao fim.
          </p>

          <div className={styles.ctaWrapper}>
            <ButtonA link="/contato" text="Solicitar Orçamento Grátis" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presentation;
