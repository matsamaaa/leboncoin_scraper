import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    oid: String,
    name: String,
    price: Number,
    url: String,
});

export default mongoose.model("Result", resultSchema, "results");