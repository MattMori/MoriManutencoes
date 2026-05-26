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
            Garantindo o melhor <br /> <span>serviço para </span>
            sua casa ou empresa.
          </h1>

          <p className={styles.lead}>
            Sou Milton Mori. Há 25 anos, transformo residências e empresas com
            serviços técnicos baseados em segurança, normas rígidas e execução
            impecável.
          </p>

          <p className={styles.description}>
            O segredo de uma obra sem estresse está no respeito ao seu espaço.
            Entrego projetos elétricos complexos e acabamentos de pintura com
            cronograma à risca e um diferencial inegociável: organização
            absoluta e ambiente limpo do início ao fim.
          </p>

          <div className={styles.ctaWrapper}>
            <ButtonA link="/contactForm" text="Solicitar Orçamento Grátis" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presentation;
