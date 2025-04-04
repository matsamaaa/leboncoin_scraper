import result from "../models/result";

class ResultManager {
    constructor() {
        this.model = result;
    }

    async create(data) {
        const newResult = new this.model(data);
        return await newResult.save();
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

export default ResultManager;