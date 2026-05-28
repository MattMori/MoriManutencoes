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
            title="Instalações, Climatização e Reformas"
            description={
              <p>
                Soluções completas para sua casa ou comércio. Realizamos instalações do zero e 
                manutenções gerais como troca de fiação, tomadas e disjuntores. Inclui a instalação 
                técnica de ar-condicionado para garantir eficiência térmica, além de projetos de iluminação 
                (LED, lustres) e montagem de ventiladores de teto.
              </p>
            }
          />

          <Card
            title="Poste Padrão CPFL e Aterramento"
            description={
              <p>
                Infraestrutura de entrada segura e homologada. Executamos a instalação completa de poste padrão 
                de energia de acordo com as normas estritas da CPFL (residencial, comercial ou coletivo). 
                Construímos sistemas de aterramento em anel para proteção absoluta de equipamentos eletroeletrônicos 
                contra surtos e descargas atmosféricas.
              </p>
            }
          />

          <Card
            title="Painéis e Comandos Elétricos"
            description={
              <p>
                Soluções especializadas para o comércio, condomínios e indústrias. Projeto, montagem e manutenção 
                de quadros de distribuição (QGDI) e painéis de comando elétrico. Proteção avançada para motores, 
                bombas de água e maquinários elétricos, garantindo a continuidade da sua operação com total garantia.
              </p>
            }
          />

          <Card
            title="Diagnóstico de Panes e Preventiva"
            description={
              <p>
                Manutenção inteligente com foco na economia e segurança. Através de testes de termografia 
                (uso de câmeras térmicas), detectamos pontos quentes ocultos e componentes desgastados antes que 
                eles quebrem. Ideal para evitar panes graves e identificar fugas de corrente que aumentam a conta.
              </p>
            }
          />
        </div>

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