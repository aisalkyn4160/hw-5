import { useState } from 'react';

export const Inp = () => {
    const [inpValue, setInpValue] = useState('input value')
    const setInpValueHandler = (e) => setInpValue(e.target.value)
    return <input type="text" value = {inpValue} onChange ={setInpValueHandler}/>
}