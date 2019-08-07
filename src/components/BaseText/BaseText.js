import React from 'react';
import './BaseText.css';

function BaseText({children}) {
    return (
        <p className='base-text'>
            {children}
        </p>
    )
}

export default BaseText;
