import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={styles.searchBarContainer}>
         <input className={styles.searchBarInput} type='search' />
         <button className={styles.searchBarButton} onClick={onSearch}>Agregar</button>
      </div>
   );
}
