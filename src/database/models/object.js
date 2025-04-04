import mongoose from 'mongoose';

const objectSchema = new mongoose.Schema({
    name: String,
    price: Number
});

export default mongoose.model('Object', objectSchema, 'objects');