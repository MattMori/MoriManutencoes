import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        MoriService © 2026 <span>•</span> Engenharia e Manutenção Elétrica
      </p>
    </footer>
  );
}

export default Footer;
