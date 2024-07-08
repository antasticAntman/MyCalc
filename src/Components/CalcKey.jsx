import React, { useEffect } from 'react'

export default function CalcKey(props) {

    const {calc_data, buttonClicker} = props

    
    return (
        <button className='uppercase bg-color-light key text-white' id={calc_data.id} onClick={()=>buttonClicker(calc_data.key_data)}>{`${calc_data.key_info}`}</button>
     );
};

