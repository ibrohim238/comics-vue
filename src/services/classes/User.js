export default class User {
    constructor(data) {
        this.id = 0
        this.name = ''
        this.email = ''
        this.avatar = ''
        this.created_at = ''

        if (data) {
            this.applyServerUser(data)
        }
    }

    applyServerUser (data) {
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.avatar = data.avatar
        this.created_at = data.created_at
    }

    static getStoreRequest(data) {
        let requestBody = {
            name: data.name,
        }

        return requestBody
    }
}