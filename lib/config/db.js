import mongoose from "mongoose"

export const ConnectDB=async()=>{
    const mongoUri = process.env.DB_URL;
    await mongoose.connect(mongoUri)
    // console.log("DB connetced")
}