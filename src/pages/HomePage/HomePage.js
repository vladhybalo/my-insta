import React from 'react';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer';
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import {connect} from 'react-redux';
import {getNewPhotoCollection, addPhotosToCollection} from "../../store/actions";

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.inputValue = '';
        this.searchValue = null;
    }

    handleScroll = () => {
        const pixelsToBottom = 200;
        const bottomOfWindow = (document.documentElement.scrollTop + window.innerHeight + pixelsToBottom)
            >= document.documentElement.offsetHeight;
        if (bottomOfWindow) {
            this.props.addPhotosToCollection(this.searchValue);

            this.removeScrollListener();
        }
    };

    addScrollListener = () => {
        window.addEventListener('scroll', this.handleScroll);
    };

    removeScrollListener = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };

    inputSearchingValue = ({target}) => {
        this.inputValue = target.value;
    };

    searchByEnter = event => {
        if (event.key === 'Enter') {
            this.searchDate();
        }
    };

    searchDate = () => {
        this.searchValue = this.inputValue;

        this.props.getNewPhotoCollection(this.searchValue);
    };

    componentDidMount() {
        this.props.getNewPhotoCollection();
    };

    componentDidUpdate() {
        this.addScrollListener();
    };

    componentWillUnmount() {
       this.removeScrollListener();
    };

    render() {
        return (
            <>
                <SearchContainer
                    handleInput={this.inputSearchingValue}
                    searchDate={this.searchDate}
                    getPhotos={this.props.getNewPhotoCollection}
                    searchByEnter={this.searchByEnter}
                />
                <PhotosContainer photos={this.props.photos}/>
            </>
        )
    };
}

const mapStateToProps = (state) => {
    return {
        photos: state.photos,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewPhotoCollection: keyword => dispatch(getNewPhotoCollection(keyword)),
        addPhotosToCollection: photos => dispatch(addPhotosToCollection(photos))
    }
};

HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePage);

export default HomePage;
