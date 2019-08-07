import React from 'react';
import {connect} from 'react-redux';
import PhotoItem from '../../components/PhotoItem/PhotoItem';
import UnsplashApi from '../../UnsplashApi';
import './PhotoPage.css';
import BaseText from '../../components/BaseText/BaseText';

class PhotoPage extends React.Component {

    constructor(props) {
        super(props);

        // TODO is it correct not to use state when saving static data
        this.unsplash = new UnsplashApi();
        this.id = this.props.match.params.id;

        this.state = {
            photo: null,
        }
    }

    getCurrentPhoto = () => {
        if (this.id) {
            this.unsplash.getPhotoById(this.id)
                .then(photo => {
                    this.setState({
                        ...this.state,
                        photo,
                    });
                })
        }
    }

    componentDidMount() {
        const photo = this.props.photo(this.id);
        if (!photo) {
            this.getCurrentPhoto();
        } else {
            this.setState({
                ...this.state,
                photo,
            });
        }
    }

    render() {
        console.log(this.state.photo);
        return this.state.photo &&
            <div className='photo-page'>
                <div className='photo-page__img-wrap'>
                    <PhotoItem imgUrl={this.state.photo.urls.regular} description={this.state.photo.description}/>
                </div>
                <div className='photo-page__text-wrap'>
                    <BaseText>
                        {this.state.photo.description || this.state.photo.user.bio || 'Random funny photo'}
                    </BaseText>
                </div>
            </div>
    }
}

const mapStateToProps = (state) => {
    return {
        photo: (id) => state.photos && state.photos.find(photo => photo.id === id)
    }
};

export default PhotoPage = connect(
    mapStateToProps,
)(PhotoPage);
