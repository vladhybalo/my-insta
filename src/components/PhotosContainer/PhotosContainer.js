import React from 'react';
import Unsplash from "unsplash-js";
import PhotoItem from '../PhotoItem/PhotoItem'

class PhotosContainer extends React.Component {
    state = {
        photos: null,
    }

    componentDidMount() {
        const unsplash = new Unsplash({
            
        });

        unsplash.collections.listCollections(1, 10, "popular")
            .then(toJson => {
                console.log(toJson);
                return toJson.json();
            })
            .then(json => {
                // Your code
                console.log(json);
            });

        unsplash.search.photos('keyword', 1, 10)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(({results}) => {
                console.log(results);
                this.setState({
                    ...this.state,
                    photo: results,
                })
            })
    }

    render() {
        return (
            <div>
                {this.photos && this.photos.map(photo => {
                    return (
                        <PhotoItem imgUrl={photo.urls.regular} description={photo.description} key={photo.id}/>
                    )
                })}
            </div>
        )
    }
}

export default PhotosContainer;
