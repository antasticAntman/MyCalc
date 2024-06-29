import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {

  const [equation, setEquation] = useState('Number?')

  const buttonClicker = (number) => {
    if(equation === 'Number?') {
      setEquation(number)
    } else {
      // return setEquation(`${equation} ${number}`)
      setEquation(equation + number)
    }
  }

  return (
  <div className='calcApp'>
    <h1 className='title-card'>My Calc</h1>
    
    <div className='container calc-body'>

      <div class="uppercase input-box">
        <span>{equation}</span>
      </div>
      
      <div className='grid-container container'>
        <div className='grid-container grid-container-keysection'>
          {calc_data.map((calc_info) => {
            return (
              <CalcKey key={calc_info.id} calc_data={calc_info} buttonClicker={buttonClicker}/>        
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