import React from 'react';
import './BaseInput.css';

function BaseInput({value, handleInput, handleEnterPressing}) {
    return (
        <input onKeyPress={handleEnterPressing} className='base-input' type="text" defaultValue={value} onInput={handleInput}/>
    )
}

export default BaseInput;
