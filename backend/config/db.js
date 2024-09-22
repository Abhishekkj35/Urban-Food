
import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://abhishekkj6810:abhi6810@cluster0.siiuclf.mongodb.net/food-delivery").then(() => console.log("DB Connected"))
}


