export default class Chapter {
    constructor(data) {
        this.id = 0
        this.volume = 0
        this.number = 0
        this.name = ''
        this.manga = ''
        this.team = {}
        this.media = []
        this.price = 0
        this.free_at = ''
        this.created_at = ''

        if (data) {
            this.applyServerUser(data)
        }
    }

    applyServerUser (data) {
        this.id = data.id
        this.volume = data.volume
        this.number = data.number
        this.name = data.name
        this.manga = data.manga
        this.team = data.team
        this.media = data.media
        this.free_at = data.free_at
        this.created_at = data.created_at
    }

    static getStoreRequest(data) {
        let formData = new FormData();
        formData.append('volume', data.volume);
        formData.append('number', data.number);
        formData.append('name', data.name);
        formData.append('price', data.price);
        if (data.teamId) {
            formData.append('team_id', data.teamId);
        }
        if (data.mangaSlug) {
            formData.append('manga', data.mangaSlug);
        }
        data.media.forEach((value) => formData.append("media[]", value))

        return formData
    }
}