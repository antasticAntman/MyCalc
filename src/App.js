import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'

function App() {

  useEffect( () => {
    console.log(`Making sure the react app is mounting correcty and ${word}`)
    console.log(calc_data)
  })

  return (
  <div className="calc-body">
    <h1>My Calc</h1>
  </div>
  )
}

export default App;
