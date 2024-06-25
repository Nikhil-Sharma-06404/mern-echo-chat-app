import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"

export const sendMessage = async(req,res) =>{
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params; // send/123 -> denotes receiver id who will receive my message

        const senderId = req.user._id; // before that use middleware : authorisation to check user is logged or not
        
        // extract conversation b/w sender and receiver
        let conversation = await Conversation.findOne({
            participants: {$all : [senderId, receiverId]}
        });

        // No conversation exists beforehand b/w sender and receiver
        // Eg: Sending Message for first time
        if(!conversation){
            let conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        
        // SOCKET IO functionality here

        // await conversation.save();
        // await newMessage.save();

        // This will save parallely and saves time Optimisation
        await Promise.all([conversation.save(), newMessage.save()]);
      
        res.status(201).json(newMessage);
        
    } catch (error) {
        console.log("Error in sendMessage Controller", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export const getMessages = async(req,res) =>{
    try {
        const {id: userToChatId} = req.params; // Other person id whom user want to chat with
        const senderId = req.user._id; // user id

        // Instead of returning messageId of each conversation it will return array of objects of messages
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");  // NOT REFERENCE Ids BUT ACTUAL MESSAGES

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(200).json(messages);
        
    } catch (error) {
        console.log("Error in getMessage Controller", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}