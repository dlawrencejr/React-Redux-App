import React from 'react';
import axios from 'axios'
import Poke from './components/Poke'
import './App.css';

function App() {
  axios
    .get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      console.log(res)
    })

    return(
      <div>
        <Poke/>
      </div>
    )
 
}

export default App;
