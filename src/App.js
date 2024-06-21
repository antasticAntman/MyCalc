import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {

  const buttonClicker = () => {
    return (
    console.log('hello from the calc')
    )
}

  return (
  <div className='calcApp'>
    <h1 className='title-card'>My Calc</h1>
    
    <div className='container calc-body'>

      <div class="uppercase input-box">
        <span>Number?</span>
      </div>
      
      <div className='grid-container container'>
        <div className='grid-container grid-container-keysection'>
          {calc_data.map((calc_info) => {
            return (
              <CalcKey calc_data={calc_info} buttonClicker={buttonClicker}/>        
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