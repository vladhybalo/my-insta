import React from 'react';
import BaseButton from "../BaseButton/BaseButton";
import BaseInput from "../BaseInput/BaseInput";
import './SearchContainer.css';

function SearchContainer(props) {
    // TODO ask where is better to describe functions inside or outside the stateless component
    // for example if i need some input or button handlers here

    return (
        <div className='search'>
            <BaseInput handleEnterPressing={props.searchByEnter} value={props.inputValue} handleInput={props.handleInput}/>
            <BaseButton handleClick={props.searchDate}>Search</BaseButton>
        </div>
    )
}

export default SearchContainer;