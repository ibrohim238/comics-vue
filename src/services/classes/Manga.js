export default class Manga {
    constructor(data) {
        this.id = 0
        this.name = ''
        this.slug = ''
        this.description = ''
        this.media = ''
        this.tags = []
        this.rating = 0
        this.ratings_count = 0
        this.votes = 0

        if (data) {
            this.applyServerUser(data)
        }
    }

    applyServerUser (data) {
        this.id = data.id
        this.name = data.name
        this.slug = data.slug
        this.description = data.description
        this.media = data.media
        this.tags = data.tags
        this.rating = data.rating
        this.ratings_count = data.ratings_count
        this.votes = data.votes
    }

    static getStoreRequest(data) {
        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        data.tags.forEach((value) => formData.append("tags[]", value))
        if(data.media) {
            formData.append('media[]', data.media);
        }

        return formData
    }
}