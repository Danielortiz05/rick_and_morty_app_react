import styles from './Card.module.css'

export default function Card({name, species, gender, image, onClose}) {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.buttonContainer}>
            <button onClick = {onClose}>X</button>
         </div>
         <div className={styles.imageContainer}>
            <img  src={image} alt="" />
            <h2 className={styles.name}>{name}</h2>
         </div>
         <div className={styles.infoContainer}>  
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
      </div>
   );
}
