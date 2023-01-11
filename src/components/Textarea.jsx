import { useState } from "react"

export const TextArea = () =>{
    const [value, setValue] = useState('textarea')
    const setValueHandler = (e) => setValue(e.target.value)
    return <textarea value={value} onChange ={setValueHandler}/>
}

