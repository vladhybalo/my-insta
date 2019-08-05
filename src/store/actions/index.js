export const ADD_PHOTOS = 'ADD_PHOTOS';
export const SET_SEARCHING_VALUE = 'SET_SEARCHING_VALUE';

export function addPhotos(photos) {
    console.log('Add');
    console.log(photos);
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
