export const ADD_PHOTOS = 'ADD_PHOTOS';
export const SET_SEARCHING_VALUE = 'SET_SEARCHING_VALUE';

export function addPhotos(photos) {
    return (dispatch)=>{

 fetch().then(res=>res.josn().then(dispatch()))
    }

    return {
        type: ADD_PHOTOS,
        photos,
    };
}

export function setSearchingValue(searchingValue) {
    return {
        type: SET_SEARCHING_VALUE,
        searchingValue,
    }
}


// TODO add react router, thunk, dispatch (own), page for each img