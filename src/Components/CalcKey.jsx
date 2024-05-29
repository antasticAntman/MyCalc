import React, { useEffect } from 'react'

export default function CalcKey(props) {
    
    const {calc_data} = props

    useEffect( () =>  {
        console.log('button', 'button data is', props.calc_data)
    })
    
    return (
        <button id={calc_data.id}>{calc_data.key_info}</button>
     );
};