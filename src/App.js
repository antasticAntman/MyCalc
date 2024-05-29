import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {

  const testData = calc_data[0]

  useEffect( () => {
    console.log(`Making sure the react app is mounting correcty and ${word}`)
    console.log(testData)
  })

  return (
  <div className="calc-body">
    <h1>My Calc</h1>
    <CalcKey calc_data={testData}/>
  </div>
  )
}

export default App;
