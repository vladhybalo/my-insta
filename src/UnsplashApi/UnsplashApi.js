import Unsplash from "unsplash-js";

class UnsplashApi {
    constructor() {
        this.unsplash = new Unsplash({
            applicationId: "386abc91713b2544769364f9fb7cb6059b6fedee62d7abf419666387d8154352",
            secret: "a3736a57305af7e207cdfc39f2f668f8ccc222b6b3deafe50d490a7ac0d353e0"
        });

    }

    init() {

    }

    getImagesCollection(keyword = 'popular') {
        return this.unsplash.collections.listCollections(1, 10, keyword)
            .then(toJson => {
                console.log(toJson);
                return toJson.json();
            })
            .then(data => {
                // Your code
                console.log(data);
                return data;
            });

    }

    getImagesPhotos(keyword = 'dogs') {
        return this.unsplash.search.photos(keyword, 1, 10)
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(({results}) => {
                console.log(results);
                return results;
                // this.setState({
                //     ...this.state,
                //     photo: results,
                // })
            })
    }

}

export default UnsplashApi;


// new UnsplashApi();
