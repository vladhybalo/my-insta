import React from 'react';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer';
import {connect} from 'react-redux'
import {setSearchingValue} from "../../store/actions";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'base value',
        }
    }

    render() {
        return (
            <div>
                <SearchContainer/>
                <PhotosContainer/>
            </div>
        )
    }
}

export default HomePage;
