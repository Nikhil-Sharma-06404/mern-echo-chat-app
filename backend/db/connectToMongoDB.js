import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_DB_URL)
       console.log("Connected To Mongo DB");
    }
    catch(error){
        console.log("Error Connecting to MongoDb",error.message);
    }
}

export default connectToMongoDB;