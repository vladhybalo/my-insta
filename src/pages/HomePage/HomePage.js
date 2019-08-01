import React from 'react';
import BaseInput from '../../components/BaseInput/BaseInput';


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

    render() {
        return (
            <div>
                <BaseInput value={this.state.inputValue} handleInput={this.handleInput}/>
            </div>
        )
    }
}

export default HomePage;