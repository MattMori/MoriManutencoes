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
          <span className={styles.eyebrow}>
            MoriService • Campinas e Região
          </span>

          <h1>Serviço elétrico seguro para residências e empresas.</h1>

          <p className={styles.lead}>
            Sou Milton Mori. Há 25 anos, garanto a infraestrutura elétrica de
            residências, comércios e empresas com serviços técnicos de alta
            complexidade, seguindo NR-10, NBR 5410 e padrões rigorosos de
            segurança.
          </p>

          <p className={styles.description}>
            Atuo com instalações, manutenção, diagnóstico de panes, montagem de
            painéis, aterramento, poste padrão CPFL e automação. Do primeiro
            contato até a entrega final, o foco é simples: resolver com técnica,
            transparência e zero dor de cabeça.
          </p>

          <div className={styles.highlights}>
            <span>25 anos de experiência</span>
            <span>NR-10 e NBR 5410</span>
            <span>Diagnóstico preciso</span>
          </div>

          <div className={styles.ctaWrapper}>
            <ButtonA link="/contato" text="Solicitar orçamento" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Presentation;
