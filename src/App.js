import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState } from 'react'

function App () {
  const[character, setCharacter] = useState([]);
  function onSearch(id) {
    const URL_BASE = "https://be-a-rym.up.railway.app/api"
    const KEY = "b6a5561385d1.7d83a4c1823aed85f1e5"
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name && !character.find((char) => char.id === data.id)) {
             setCharacter((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose = (id) => {
    setCharacter(character.filter((char) => char.id !==id))
  }
  
  return (
    <div className='App' style={{ padding: '0px' }}>
      <Nav onSearch={onSearch} />
      <hr />
      <Cards character={character} onClose={onClose}/>
      <hr />
    </div>
  )
}

export default App
