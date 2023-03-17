import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={styles.searchBarContainer}>
         <input className={styles.searchBarInput} type='search' onChange={handleChange} />
         <button className={styles.searchBarButton} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
