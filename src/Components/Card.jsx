import ButtonA from './ButtonA';
import styles from './Card.module.css';

function Card({ title, description, link }) {
    return (
        <div className={styles.card}>
            <section>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>
            <ButtonA className={styles.ButtonB} href={link} text="Veja Fotos" />
        </div>
    );
}

export default Card;
