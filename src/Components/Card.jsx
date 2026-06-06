import styles from "./Card.module.css";

function Card({ title, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.iconBox}>
        <span>⚡</span>
      </div>

      <div className={styles.content}>
        <h3>{title}</h3>

        <div className={styles.description}>{description}</div>
      </div>
    </article>
  );
}

export default Card;
