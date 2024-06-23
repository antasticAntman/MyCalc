import React, { useEffect } from 'react'

export default function CalcKey(props) {
    
    useEffect( () => {
        console.log(props)
    })

    const {calc_data, buttonClicker} = props

    // const buttonClicker = () => {
    //     return (
    //     console.log('hello from the calc')
    //     )
    // }
    
    return (
        <button className='uppercase bg-color-light key text-white' id={calc_data.id} onClick={()=>buttonClicker(calc_data.key_info)}>{`${calc_data.key_info}`}</button>
     );
};

// When I work on this next, add onto the calc data info, so the information for the button clicker can be set up, also add some mularkey just in case
// I can not hop on and code tomorrow. I will I promise, I made an oath to do so! Believe it!