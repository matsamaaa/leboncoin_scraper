import object from "../models/object";

class ObjectManager {
    constructor() {
        this.model = object;
    }

    async create(data) {
        const newObject = new this.model(data);
        return await newObject.save();
    }

    async findById(id) {
        return await this.model.findById(id);
    }

    async findAll() {
        return await this.model.find();
    }

    async update(id, data) {
        return await this.model.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }
}

export default ObjectManager;