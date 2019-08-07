import apiKeys from './apiKeys';

class UnsplashApi {
    constructor(Unsplash) {
        this.unsplash = new Unsplash(apiKeys);

        this.pageNumber = 1;
    }

    resetPages() {
        this.pageNumber = 1;
    }

    getConcretePhotos(keyword) {
        return this.unsplash.search.photos(keyword, this.pageNumber++, 10)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(({results}) => {
                console.log(results);
                return results;
            })
    }

    getPopularPhotos() {
        return this.unsplash.photos.listPhotos(this.pageNumber++, 10, 'popular')
            .then(response => response.json());
    }

    getPhotos(keyword) {
        if (keyword) {
            return this.getConcretePhotos(keyword);
        } else {
            return this.getPopularPhotos();
        }
    }

    getPhotoById(id) {
        return this.unsplash.photos.getPhoto(id, 1920, 1080, [0, 0, 1920, 1080])
            .then(res => res.json());
    }
}

export default UnsplashApi;
