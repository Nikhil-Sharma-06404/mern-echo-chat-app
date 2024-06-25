import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Objectid is referring from user Schema/collection
        required: true
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Objectid is referring from user Schema/collection
        required: true
    },

    message: {
        type: String,
        requried: true
    }
}, 
// Created At, Updated at
{timestamps:true}
)

const Message = mongoose.model("Message",messageSchema);

export default Message;