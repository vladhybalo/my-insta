import React from 'react';
import BaseInput from '../../components/BaseInput/BaseInput';
import Unsplash from 'unsplash-js';
import PhotosContainer from '../../components/PhotosContainer/PhotosContainer'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'base value',
        }
    }

    handleInput = ({target}) => {
        console.log(target.value);
        this.setState({
            ...this.state,
            inputValue: target.value
        })
    }

    componentDidMount() {
        // ES Modules syntax



    }

    render() {
        return (
            <div>
                <BaseInput value={this.state.inputValue} handleInput={this.handleInput}/>
                <PhotosContainer></PhotosContainer>
            </div>
        )
    }
}

export default HomePage;
