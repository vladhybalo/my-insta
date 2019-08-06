import React from 'react';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer';
import SearchContainer from "../../components/SearchContainer/SearchContainer";

class HomePage extends React.Component {
    render() {
        return (
            <>
                <SearchContainer/>
                <PhotosContainer/>
            </>
        )
    }
}

export default HomePage;
