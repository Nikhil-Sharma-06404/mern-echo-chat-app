import User from "../models/user.model.js";

export const getUsersForSideBar = async(req,res) => {
   try {
    // Logged in user id using protect Route middleware 
    const loggedInUserId = req.user._id; 

    const filteredUsers = await User.find({ _id: {$ne: loggedInUserId}}).select("-password"); // Extract all users except (ne i.e not equal to) loggedInUser 
    
    res.status(200).json(filteredUsers);
    
   } catch (error) {
      console.log("Error in getUsersForSideBar Controller ",error.message);
      res.status(500).json({error: "Internal Server Error !"});
   }
}