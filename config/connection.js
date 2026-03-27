import mongoose from "mongoose"

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to mongoDB!")
    }catch(e){
        console.log(e)
    }
}

connectDB()