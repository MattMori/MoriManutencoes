import { Link } from "react-router-dom";
import styles from "./ButtonA.module.css";

function ButtonA({ text, link, type = "button", onClick }) {
  const isExternalLink =
    typeof link === "string" &&
    (link.startsWith("http://") || link.startsWith("https://"));

  if (link && isExternalLink) {
    return (
      <a href={link} className={styles.btn} target="_blank" rel="noreferrer">
        <span>{text}</span>
      </a>
    );
  }

  if (link) {
    return (
      <Link to={link} className={styles.btn}>
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default ButtonA;
