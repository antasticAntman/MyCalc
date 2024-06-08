import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {


  useEffect( () => {
    console.log(`Making sure the react app is mounting correcty and ${word}`)
  })

  return (
  <div>
    <h1 className='title-card'>My Calc</h1>
    
    <div className='container calc-body'>

      <div class="uppercase input-box">
        <span>Number?</span>
      </div>
      
      <div className='grid-container'>
        <div className='grid-container grid-container-keysection'>
          {calc_data.map((calc_info) => {
            return (
              <CalcKey calc_data={calc_info}/>        
            )
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
// Were adding the CalcKey button next for the app!