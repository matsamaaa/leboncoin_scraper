import mongoose from "mongoose";
import dotenv from "dotenv";
import Log from "../utils/logs.js";

const connect = async () => {
    dotenv.config();
    const { MONGO_URL } = process.env;

    if (!MONGO_URL) {
        const errorMessage = "MONGO_URL is not defined in the environment variables.";
        Log.Error(errorMessage);
        throw new Error(errorMessage);
    }

    Log.Info('connection in progress to the database');
    try {
        await mongoose.connect(MONGO_URL);
        Log.Success('Connection to database successful');
    } catch (err) {
        Log.Error(`Connection to database failed: ${err.message}`);
        throw new Error(`Connection to database failed: ${err.message}`);
    }
};

export default connect;