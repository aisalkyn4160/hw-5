import { useState } from 'react';

const Select = () => {

    const [selValue, setSelValue] = useState('')
    const selValueHandler = (e) => {
        setSelValue(e.target.value)
    }

    return (
        <div>
            <select onChange={selValueHandler}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>,
            {selValue}
        </div>
    )
}

export default Select