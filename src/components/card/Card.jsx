import styles from './card.module.css';

const Card = ({img, title, chapter})=>{
    console.log(img);
    


    return(
        <div className={styles.card}>
            <img src={img} alt={title} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.chapter}>{chapter}</p>
        </div>
    )
}

export default Card;