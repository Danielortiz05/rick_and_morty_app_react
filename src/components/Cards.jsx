import Card from './Card';

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
      <div>
         {charactersItems}
      </div>
   );
}
