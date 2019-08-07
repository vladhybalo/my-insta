import {ADD_PHOTOS, SET_NEW_PHOTO_COLLECTIONS} from "../actions/actionsTypes";

const initialState = {
    photos: null,
};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state,
                photos: [
                    ...(state.photos || []),
                    ...(action.photos),
                ]
            };
        case SET_NEW_PHOTO_COLLECTIONS:
            return {
                ...state,
                photos: action.photos,
            };
        default:
            return state;
    }
}

export default appReducer;
