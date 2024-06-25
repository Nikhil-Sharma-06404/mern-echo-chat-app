import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

// JWT_SECRET KEY is used to sign the token digitally only after verifying with payload as {userId}
const generateTokenAndSetCookie = (userId, res) => {
     const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
     })

     res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000, // ms
        httpOnly: true, // Prevent XSS Attacks -> Cross site Scripting attacks cookie not accesible by js
        sameSite: "strict", // CSRF attacks
        secure: process.env.NODE_ENV !== "development"
     })
}

export default generateTokenAndSetCookie;