import UnsplashApi from '../../UnsplashApi';
import {ADD_PHOTOS, SET_NEW_PHOTO_COLLECTIONS} from "./actionsTypes";

const unsplash = new UnsplashApi();

export function getNewPhotoCollection(keyword) {
    // set current to 1 because lib use pages not infinity scrolling
    unsplash.resetPages();

    return (dispatch) => {
        unsplash.getPhotos(keyword)
            .then(res => {
                console.log(res);
                return res;
            })
            .then(photos => dispatch(setNewCollection(photos)));
    }
}

export function addPhotosToCollection(keyword) {
    return (dispatch) => {
        unsplash.getPhotos(keyword)
            .then(photos => dispatch(addPhotos(photos)));
    }
}

function addPhotos(photos) {
    return {
        type: ADD_PHOTOS,
        photos,
    };
}

function setNewCollection(photos) {
    return {
        type: SET_NEW_PHOTO_COLLECTIONS,
        photos,
    };
}

// TODO add react router, thunk, dispatch (own), page for each img