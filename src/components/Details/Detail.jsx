import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css'
import axios from 'axios'

export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api"
        const KEY = "b6a5561385d1.7d83a4c1823aed85f1e5"
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)
          .then((response) => setCharacter(response.data));
    }, []);
    
    return (
        <div>
          {character.name ? (
            <div>
              <h1 className={styles.name}>Name: {character.name}</h1>
              <h2 className={styles.name}>Status: {character.status}</h2>
              <h2 className={styles.name}>Specie: {character.species}</h2>
              <h2 className={styles.name}>Gender: {character.gender}</h2>
              <h2 className={styles.name}>Origin: {character.origin?.name}</h2>
              <img src={character.image} alt='img' className={styles.name}/>
            </div>
            ):(
              <p>Loading...</p>
            )}
            
            
         
        </div>
    );

}