import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import Slider from './components/Slider';
import axios from 'axios';
import './App.css';

const App = () => {
  //state of my component
  const [monsters, setMonsters] = useState([])
  const [currentMonster, setCurrentMonster] = useState({})

  //my fetch request to the server
  async function getMonster() {
    console.log('getMonster begins')
    const result = await axios.get("https://mhw-db.com/monsters")
    const monstersTable = []
    result.data.map((item) => {
        //keep only large monsters for our wiki
        if (item.type === "large" && !(item.species === "relict")) {
            monstersTable.push(item)
        }
    })
    //set our state with the array of objects we get
    setMonsters(monstersTable)
    setCurrentMonster(monstersTable[0])
  }

  //hook to use getMonster() at the loading of the page
  useEffect(() => {
    console.log('hook is triggered')
    getMonster()
  }, [])

  const changeMonster = (monster) => {
    console.log('changeMonster is triggered')
    setCurrentMonster(monster)
  }

  return (
    <React.Fragment>
      <Main monster={currentMonster}/>
      <Slider monsters={monsters} changeMonster={changeMonster}/>
    </React.Fragment>
  );
}

export default App;
