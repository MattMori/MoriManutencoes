import styles from './Card.module.css'

function Card({title,description, img}){

    return(
    <div className={styles.card}>
             <section>
                <h3>{title}</h3>
                <p>{description}</p>
            </section>   
                        
    </div>)}

export default Card