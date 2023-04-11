import './App.css'
import About from './components/About/About.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import Detail from './components/Details/Detail.jsx'
import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Form from './components/Form/Form.jsx'

function App () {
  const navigate = useNavigate();
  const username = "danielortiz@mail.com";
  const password = "admin123";
  const[access, setAccess] = useState(false);

  function login(userData){
    if(userData.password === password && userData.username === username){
      setAccess(true);
      navigate('/home');
    }else{
      alert("Datos incorrectos")
    }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

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
      <Routes>
        <Route path='/' element={<Form login={login}/>}/>
        <Route path='/home' element={<Cards character={character} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>

      </Routes>
    </div>
   
  )
}

export default App
