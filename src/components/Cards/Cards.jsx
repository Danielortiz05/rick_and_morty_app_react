import Card from '../Card/Card';
import styles from './Cards.module.css'

export default function Cards({characters}) {
   const charactersItems = characters.map(({name, species, gender, image, onClose} )=>{
      return <Card
               name = {name}
               species = {species}
               gender = {gender}
               image = {image}
               onClose ={() => window.alert('Emulamos que se cierra la card')}
            /> 
   })
   return (
      <div className={styles.cardsContainer}>
         {charactersItems}
      </div>
   );
}
