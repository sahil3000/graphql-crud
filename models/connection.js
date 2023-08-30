import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const URL = "mongodb://0.0.0.0:27017/graphql_db"
        await mongoose.connect(URL)
        console.log("Mongodb connected successfully");
    } catch (err) {
        console.log("Database fail to connect", err.message);
    }
}
