import React from 'react';
import BaseButton from "../BaseButton/BaseButton";
import BaseInput from "../BaseInput/BaseInput";
import {addPhotos, setSearchingValue} from "../../store/actions";
import {connect} from "react-redux";
import ApiInstance from "../../UnsplashApi";

class SearchContainer extends React.Component {

    handleInput = ({target}) => {
        console.log(target.value);
        this.props.setSearchingValue(target.value);
    }

    searchDate = ({}) => {
        const unsplashApi = new ApiInstance();

        unsplashApi.getImagesPhotos()
            .then(photos => {
                this.props.setPhotos(photos);
            });

        console.log(this.props)
    }

    render() {

        return (
            <div className='search'>
                <BaseInput value={this.props.inputValue} handleInput={this.handleInput}/>
                <BaseButton handleClick={this.searchDate}>Search</BaseButton>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        searchingValue: state.searchingValue,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setSearchingValue: searchingValue => dispatch(setSearchingValue(searchingValue)),
        setPhotos: photos => dispatch(addPhotos(photos))
    }
};

SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchContainer);

export default SearchContainer;
