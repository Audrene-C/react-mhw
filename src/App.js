import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Specie from './components/Specie';
import Slider from './components/Slider';
import Footer from './components/Footer';

const App = () => {
  //state of my component
  const [monsters, setMonsters] = useState([])
  const [currentMonster, setCurrentMonster] = useState({})
  const [currentSpecie, setCurrentSpecie] = useState([])

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
    setCurrentSpecie(monstersTable)
  }

  //hook to use getMonster() at the loading of the page
  useEffect(() => {
    console.log('hook is triggered')
    getMonster()
  }, [])

  //passed to slider to change monster when icon is clicked on
  const changeMonster = (monster) => {
    console.log('changeMonster is triggered')
    setCurrentMonster(monster)
    console.log(monster)
  }

  //passed to the species tabs to change monsters that are shown in the slider
  const changeSpecie = (specie) => {
    console.log('changeSpecie is triggered')
    if (specie === "all") setCurrentSpecie(monsters);
    else {
      let newCurrentSpecie = []
      monsters.forEach((item) => {
        if (item.species === specie) newCurrentSpecie.push(item);
      })
      setCurrentSpecie(newCurrentSpecie)
    }
  }

  return (
    <React.Fragment>
      <Header />
      <Main monster={currentMonster}/>
      <Specie changeSpecie={changeSpecie}/>
      <Slider monsters={currentSpecie} changeMonster={changeMonster}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
