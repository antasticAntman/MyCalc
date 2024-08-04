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
    let first_part = "";
  // We need to loop over the orignal number until it reaches a boolean of * or - or + or / 
    // Once it reaches that, create a array that holds those numbers before it reaches that boolean, once it does
    // Make a new number set to add to that array until it either reaches the end or another boolean
    for(let i = 0; i <= number.length -1; i++) {
      const str_lngth = number.length
      if(number[i] ==='*'){
        console.log("length", str_lngth)
      } else if (number[i] === "/"){
        console.log("/")
      } else if (number[i] === "+") {
        console.log("+")
      } else if (number[i] === "-"){
        console.log("-")
      }
  // I have too add the number[i]
      first_part = first_part + number[i]
      console.log("First cantation",first_part)
    }

  // Run that equation to see the result, console log that said result!

  // Return the result as a string, then set the state back as the result
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