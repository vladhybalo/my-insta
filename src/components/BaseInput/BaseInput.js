import React from 'react';

function BaseInput({value, handleInput}) {
    return (
        <input type="text" defaultValue={value} onInput={handleInput}/>
    )
}

export default BaseInput;