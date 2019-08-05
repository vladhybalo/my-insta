import React from 'react';
import './BaseInput.css';

function BaseInput({value, handleInput}) {
    return (
        <input className='base-input' type="text" defaultValue={value} onInput={handleInput}/>
    )
}

export default BaseInput;
