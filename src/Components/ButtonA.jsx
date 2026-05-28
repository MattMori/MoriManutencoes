import styles from "./ButtonA.module.css";

function ButtonA({ text, link, type = "button" }) {
  if (link) {
    return (
      <div>
        <a href={link} rel="noreferrer">
          <button type={type} className={styles.btn}>
            {text}
          </button>
        </a>
      </div>
    );
  }

  return (
    <div>
      <button type={type} className={styles.btn}>
        {text}
      </button>
    </div>
  );
}

export default ButtonA;
