import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    name: String,
    price: Number,
    location: String,
    url: String,
    date: Date,
});

export default mongoose.model("Result", resultSchema, "results");