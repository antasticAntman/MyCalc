import './App.css';
import React, {useEffect, useState} from 'react'
import calc_data, {word} from './Data/calc-data'
import CalcKey from './Components/CalcKey';

function App() {

  const [equation, setEquation] = useState('Number?')
  const [count, setCount] = useState(0)

  const buttonClicker = (number) => {
    if(equation === 'Number?') {
      setEquation(number)
    } else {
      // I want to check if the results have been updated!
      // If the results count if greater than one, set the equation back to a empty string, then set the count to zero
        if(count === 1){
          console.log(' the results have been determined!')
        }

      setEquation(equation + number)
      // console.log('count',count)
    }
  }

  const submitionButton = (number) => {



    let first_part = "";
    let second_half = "";

    let result = ''
  // We need to loop over the orignal number until it reaches a boolean of * or - or + or / 
    // Once it reaches that, create a array that holds those numbers before it reaches that boolean, once it does
    // Make a new number set to add to that array until it either reaches the end or another boolean
    for(let i = 0; i <= number.length -1; i++) {
      const str_lngth = number.length

      // Multiplication //
      
      if(number[i] ==='*'){
        let n = i+1
        for(n; n <= number.length -1; n++) {
        if(number[n] === '*') {
          result = first_part * second_half;
          first_part = result
          second_half = ''
          break
        } else {
          second_half = second_half + number[n]
        }
        }
        result = first_part * second_half;
        i = n-1
        setEquation(result)
      } else if (number[i] === "/"){

        // Division //

        let n = i+1
        for(n; n <= number.length -1; n++) {
        if(number[n] === '/') {
          result = first_part / second_half;
          first_part = result
          second_half = ''
          break
        } else {
          second_half = second_half + number[n]
        }
        }
        result = first_part / second_half;
        i = n-1
        setEquation(result)
      } else if (number[i] === "+") {

        // Addition //

        let n = i+1
        for(n; n <= number.length -1; n++) {
        if(number[n] === '+') {
          result = parseInt(first_part) + parseFloat(second_half);
          first_part = parseInt(result);
          second_half = ''
          break
        } else {
          second_half = second_half + number[n]
        }
        }
        result = parseInt(first_part) + parseInt(second_half);
        i = n-1
        setEquation(`${result}`)
        
      } else if (number[i] === "-"){

        // subtraction //

        let n = i+1
        for(n; n <= number.length -1; n++) {
          // console.log(number[n])
        if(number[n] === '-') {
          result = first_part - second_half;
          first_part = result
          second_half = ''
          break
        } else {
          second_half = second_half + number[n]
        }
        }
        result = first_part - second_half;
        i = n-1
        setEquation(result)

      } else {
        first_part = first_part + number[i]
      }
    }

    setCount(count + 1)
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

 
// I need to go over the code and write a better explanation for the code. 
// I want to future proof my code :)

export default App;

// I am gonna put the equation button and the clear button
// at the bottom of the calc where the numbers are. I have to update the
// calc data array to have those numbers as a piece of data not the name