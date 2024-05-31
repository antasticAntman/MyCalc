import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {


  useEffect( () => {
    console.log(`Making sure the react app is mounting correcty and ${word}`)
  })

  return (
  <div className="calc-body">
    <h1 className='title-card'>My Calc</h1>
    {calc_data.map((calc_info) => {
      return (
        <CalcKey calc_data={calc_info}/>        
      )
    })}
  </div>
  )
}

export default App;
// Were adding the CalcKey button next for the app!