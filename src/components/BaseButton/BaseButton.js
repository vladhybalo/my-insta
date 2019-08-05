import React from 'react';
import './BaseButton.css';

function BaseButton({children, handleClick}) {
    console.dir(handleClick);
    console.dir(children);
    return (
        <button className='base-button' onClick={handleClick}>{children}</button>
    )
}

export default BaseButton;
