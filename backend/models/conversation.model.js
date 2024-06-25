import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
   participants: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], // array of User Ids chatting
    messages: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        default: []
    } 
    ] // array of message Ids between participant 1 and 2
},
// Created At, Updated at
{timestamps:true}
);

const Conversation = mongoose.model("Conversation",conversationSchema);

export default Conversation;