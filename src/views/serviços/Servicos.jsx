import styles from "./Servicos.module.scss";
import Card from "../../Components/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ButtonA from "../../Components/ButtonA"; 

function Servicos() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.headerTitle}>
          <span>O que fazemos</span>
          <h2>Especialidades Técnicas</h2>
        </div>

        <div className={styles.gridServicos}>
          <Card
            title="Sistemas Elétricos e Infraestrutura"
            description={
              <p>
                Instalações do zero, montagem e manutenção de quadros de distribuição (QGDI), 
                redes estabilizadas, balanceamento de carga e iluminação LED personalizada. 
                Projetos executados rigorosamente dentro da norma NBR 5410 para total segurança residencial e comercial.
              </p>
            }
          />

          <Card
            title="Pintura e Acabamento de Engenharia"
            description={
              <p>
                Preparação técnica avançada de superfícies com correção de imperfeições, 
                aplicação de massas (corrida e acrílica), texturas decorativas, vernizes e 
                tintas premium. Foco milimétrico no alinhamento visual, durabilidade e proteção contra umidade.
              </p>
            }
          />
        </div>

        {/* Inserido o link público do Drive aqui */}
        <div className={styles.centerButtonWrapper}>
          <ButtonA 
            link="https://drive.google.com/drive/folders/1YHgV6lfL82HQg1VXyZE0PbnojtagIB9P?usp=sharing" 
            text="Veja Fotos dos meus trabalhos" 
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Servicos;