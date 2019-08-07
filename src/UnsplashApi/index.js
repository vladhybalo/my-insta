import UnsplashApi from './UnsplashApi';
import Unsplash from "unsplash-js";

function ApiInstance() {
    if (ApiInstance.instance) {
        return ApiInstance.instance;
    }

    const api = new UnsplashApi(Unsplash);

    return ApiInstance.instance = api;
}

export default ApiInstance;
