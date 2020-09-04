import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [monsters, setMonsters] = useState([])

  async function getMonster() {
    console.log('getMonster se lance')
    const result = await axios.get("https://mhw-db.com/monsters")
    const monstersTable = []
    result.data.map((item) => {
        if (item.type === 'large') {
            monstersTable.push(item)
        }
    })
    setMonsters(monstersTable)
  }

  useEffect(() => {
    console.log('le hook se lance')
    getMonster()
    console.log(monsters);
  }, [])

  return (
    <div className="App">
      <Card monsters={monsters} />
    </div>
  );
}

export default App;
