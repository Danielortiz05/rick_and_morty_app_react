import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({character, onClose}) {
   // const charactersItems = 
   return (
      <div className={styles.cardsContainer}>
         {character.map(({id, name, species, gender, image}) => {
            return( <Card
                     id = {id}
                     name = {name}
                     species = {species}
                     gender = {gender}
                     image = {image}
                     onClose = {onClose}
                  /> 
            );
            })}
      </div>
   );
}
