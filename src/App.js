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
      setEquation(equation + number)
    }
  }

  const submitionButton = (number) => {
    console.log('Number', number)
  }

  const clearButton = () => {
    setEquation('Number?')
  }

  return (
  <div className='calcApp'>
    <h1 className='title-card'>My Calc</h1>
    
    <div className='container calc-body'>

      <div>      
        <div class="uppercase input-box">
          <span>{equation}</span>
        </div>
      </div>
      
      <div className='grid-container container'>
        <div className='grid-container grid-container-keysection'>
          {calc_data.map((calc_info) => {
            return (
              <CalcKey key={calc_info.id} calc_data={calc_info} buttonClicker={buttonClicker}/>        
            )
          })}
          <button id='key-equate' key='key_equate' onClick={()=>submitionButton(equation)} className='uppercase bg-color-light key text-white'>=</button>
          <button id='key-clear' key='key_clear' onClick={()=>clearButton()} className='uppercase bg-color-light key text-white'>c</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;

// I am gonna put the equation button and the clear button
// at the bottom of the calc where the numbers are. I have to update the
// calc data array to have those numbers as a piece of data not the name