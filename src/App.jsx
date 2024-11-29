import React, {useState, useEffect} from 'react'
import Character from './Components/Character/Character'
import Navbar from './Components/Navbar/Navbar'
import PagButtons from './Components/PagButtons/PagButtons'
import './App.css'

function App() {
  {/* Lógica de programación */}
     {/* estado del componente y la llamada a la API  */}

      {/* estado de la apliación */}

      const [characters, setCharacters] = useState([]) // estado inicial vacio para mis personajes
      const [info, setInfo] = useState({}) // estado inicial vacio para la paginación

      // DEFINI MI ENDPOINT PARA LA LLAMADA A LA API
      const BASE_URL = 'https://rickandmortyapi.com/api/character'

      useEffect(() =>{
       getCharacters(BASE_URL)
      }, [])

      const getCharacters = (BASE_URL) => {
       fetch(BASE_URL)
       .then((response) => response.json())
       .then((data) => {
         console.log(data.info)
         console.log(data.results)
         setCharacters(data.results)
         setInfo(data.info)
       })
       .catch((error) => console.log('ALGO SALIO MAL UPS!',error))
      }

 //manejador de eventos 
  const onPrevious = () => {
   getCharacters(info.prev)
  }

  const onNext = () =>{
   getCharacters(info.next)
  }

 return (
   <>
     {/* va mi html */}
   {/*de esta forma llamo a mis componentes */}
     <Navbar />
     <div>
     <PagButtons prev={info.prev} next={info.next} handlePrevious={onPrevious} handleNext={onNext}/>
     <Character charactersList={characters} />
     <PagButtons prev={info.prev} next={info.next}  handlePrevious={onPrevious} handleNext={onNext}/>
     </div>
   </>
 )
}

export default App
