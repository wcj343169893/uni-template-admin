const {
    Controller
} = require('uni-cloud-router')
module.exports = class StorageController extends Controller {
    async add() {
        return this.service.base.storage.add(this.ctx.data)
    }

    async list() {
        return this.service.base.storage.list(this.ctx.data)
    }

    async delete() {
        return this.service.base.storage.delete(this.ctx.data.fileID)
    }
}
