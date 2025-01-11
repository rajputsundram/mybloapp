import mongoose from "mongoose"

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://rajputsundram:RnDmIPX5vTCh6CQl@cluster0.v8cuy.mongodb.net/blog-app')
    console.log("DB connetced")
}