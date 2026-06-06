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
        <section className={styles.headerTitle}>
          <h2>Especialidades técnicas</h2>
          <p>
            Serviços elétricos para quem não quer gambiarra, atraso ou susto na
            conta. Técnica, segurança e acabamento no mesmo pacote.
          </p>
        </section>

        <section className={styles.gridServicos}>
          <Card
            title="Instalações, Climatização e Reformas"
            description={
              <p>
                Soluções completas para residências e comércios. Instalações do
                zero, troca de fiação, tomadas, disjuntores, iluminação, LED,
                lustres, ventiladores de teto e instalação técnica de
                ar-condicionado com foco em eficiência e segurança.
              </p>
            }
          />

          <Card
            title="Poste Padrão CPFL e Aterramento"
            description={
              <p>
                Instalação completa de poste padrão de energia conforme normas
                da CPFL, seja residencial, comercial ou coletivo. Também
                executamos aterramento em anel para proteção contra surtos,
                descargas atmosféricas e falhas elétricas.
              </p>
            }
          />

          <Card
            title="Painéis e Comandos Elétricos"
            description={
              <p>
                Projeto, montagem e manutenção de quadros de distribuição, QGDI,
                painéis de comando, proteção de motores, bombas de água e
                maquinários. Ideal para condomínios, comércios e operações que
                não podem parar.
              </p>
            }
          />

          <Card
            title="Diagnóstico de Panes e Preventiva"
            description={
              <p>
                Identificação precisa de falhas, fugas de corrente, sobrecargas
                e pontos críticos. A manutenção preventiva evita panes graves,
                reduz riscos e ajuda a proteger equipamentos antes que o
                prejuízo apareça.
              </p>
            }
          />
        </section>

        <div className={styles.centerButtonWrapper}>
          <ButtonA
            link="https://drive.google.com/drive/folders/1YHgV6lfL82HQg1VXyZE0PbnojtagIB9P?usp=sharing"
            text="Ver fotos dos trabalhos"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Servicos;
