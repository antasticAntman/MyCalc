import './App.css';
import React, {useEffect, useState} from 'react'

function App() {

  useEffect( () => {
    console.log('Making sure the react app is mounting correcty')
  })

  return (
  <div className="calc-body">
    <h1>My Calc</h1>
  </div>
  )
}

export default App;
