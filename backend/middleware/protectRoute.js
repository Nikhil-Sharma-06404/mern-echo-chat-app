import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Custom middleware 
const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No Token Provided" });
        }
        
        // Decode the token which is encoded in Base64 URL Encoding
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized: Invalid Token" });
        }

        const user = await User.findById(decoded.userId).select("-password"); // userId imported from jwt

        if (!user) {
            return res.status(404).json({ error: "User Not found !" });
        }

        req.user = user; // user is Verified with jwt 

        next(); // call next function -> which is (sentMessage) otherwise keep on buffering 

    } catch (error) {
        console.log("Error handling protectRoute MiddleWare: ", error.messsage);
        res.status(500).json({ error: "Internal Server Error !" });
    }
};

export default protectRoute;

