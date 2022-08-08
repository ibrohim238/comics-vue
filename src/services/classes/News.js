export default class News {
    constructor(data) {
        this.id = 0
        this.type = ''
        this.model_type = ''
        this.chapter = {}

        if (data) {
            this.applyServerUser(data)
        }
    }

    applyServerUser (data) {
        this.id = data.id
        this.type = data.type
        this.model_type = data.model_type
        this.chapter = data.chapter
    }
}