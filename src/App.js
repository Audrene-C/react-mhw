import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Slider from './components/Slider';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //state of my component
  const [monsters, setMonsters] = useState([])

  //my fetch request to the server
  async function getMonster() {
    console.log('getMonster begins')
    const result = await axios.get("https://mhw-db.com/monsters")
    const monstersTable = []
    result.data.map((item) => {
        //keep only large monsters for our wiki
        if (item.type === 'large') {
            monstersTable.push(item)
        }
    })
    //set our state with the array of objects we get
    setMonsters(monstersTable)
  }

  //hook to use getMonster() at the loading of the page
  useEffect(() => {
    console.log('hook is triggered')
    getMonster()
  }, [])

  return (
    <div className="App">
      <Main monsters={monsters} />
      <Slider monsters={monsters} />
    </div>
  );
}

export default App;
