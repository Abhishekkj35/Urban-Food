import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGODB_URL}/food-delivery`).then(() => console.log("DB connected"))
}