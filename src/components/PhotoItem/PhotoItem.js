import React from 'react';
import './PhotoItem.css';

function PhotoItem({imgUrl, description}) {
    return (
        <img className='photo__item' src={imgUrl} alt={description}/>
    )
}

export default PhotoItem;
