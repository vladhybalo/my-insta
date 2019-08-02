import React from 'react';

function PhotoItem({imgUrl, description}) {
    return (
        <img src={imgUrl} alt={description}/>
    )
}

export default PhotoItem;
