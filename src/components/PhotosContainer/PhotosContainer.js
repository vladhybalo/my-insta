import React from 'react';
import PhotoItem from '../PhotoItem/PhotoItem';
import './PhotoContainer.css';
import {Link} from "react-router-dom";

function PhotosContainer({photos}) {
    return (
        <div className='photos'>
            {photos && photos.map(photo => {
                return (
                    <div className='photo__item-wrap' key={photo.id}>
                        <Link to={'img/' + photo.id}>
                            <PhotoItem
                                imgUrl={photo.urls.regular}
                                description={photo.description}
                            />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}


export default PhotosContainer;
