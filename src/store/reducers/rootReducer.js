import {ADD_PHOTOS, SET_SEARCHING_VALUE} from "../actions";

const initialState = {
    photos: null,
    searchingValue: '',
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: [
                    ...(action.photos),
                ]
            };
        case SET_SEARCHING_VALUE:
            return {
                ...state,
                searchingValue: action.searchingValue,
            };
        default:
            return state;
    }
}

export default appReducer;
