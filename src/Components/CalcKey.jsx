import React, { useEffect } from 'react'

export default function CalcKey(props) {
    
    useEffect( () => {
        console.log(props)
    })

    const {calc_data} = props

    // const buttonClicker = () => {
    //     return (
    //     console.log('hello from the calc')
    //     )
    // }
    
    return (
        <button className='uppercase bg-color-light key text-white' id={calc_data.id}>{calc_data.key_info}</button>
     );
};