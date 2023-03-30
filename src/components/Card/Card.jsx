import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({id, name, species, gender, image, onClose}) {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.buttonContainer}>
            <button onClick={() => onClose(id)}>X</button>
         </div>
         <div className={styles.imageContainer}>
            <img  src={image} alt="" />
            <Link to={`/detail/${id}`}>
               <h2 className={styles.name}>{name}</h2>
            </Link>
         </div>
         <div className={styles.infoContainer}>  
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
      </div>
   );
}
