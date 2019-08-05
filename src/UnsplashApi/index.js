import UnsplashApi from './UnsplashApi';

function ApiInstance() {
    if (ApiInstance.instance) {
        return ApiInstance.instance;
    }

    const api = new UnsplashApi();

    return ApiInstance.instance = api;
}

export default ApiInstance;
