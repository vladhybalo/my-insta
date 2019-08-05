import React from 'react';
import {connect} from 'react-redux';
import {addPhotos} from '../../store/actions';
import PhotoItem from '../PhotoItem/PhotoItem';
import ApiInstance from "../../UnsplashApi";
import './PhotoContainer.css';

class PhotosContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: null,
        }
    }

    componentDidMount() {
        // const unsplashApi = new ApiInstance();
        //
        // unsplashApi.getImagesPhotos()
        //     .then(photos => {
        //         // addPhotos(photos);
        //         this.props.setPhotos(photos);
        //         // this.setState((state, props) => {
        //         //     return {photos};
        //         // }, () => {
        //         //     console.log(this.state)
        //         // });
        //     });
        //
        // console.log(this.props)
    }

    render() {
        console.log(this.props)
        return (
            <div className='photos'>
                {this.props.photos && this.props.photos.map(photo => {
                    return (
                        <div className='photo__item-wrap' key={photo.id}>
                            <PhotoItem
                                imgUrl={photo.urls.regular}
                                description={photo.description}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    }
};

const mapDispatchToProps = dispatch => {
    console.log('Set photos');
    return {
        setPhotos: photos => dispatch(addPhotos(photos))
    }
};

PhotosContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PhotosContainer);

export default PhotosContainer;
