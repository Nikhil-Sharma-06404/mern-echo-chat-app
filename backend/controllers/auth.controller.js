import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req,res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const user = await User.findOne({ username })

        if (user) // already exists user with same username u cannot register with same username
            return res.status(400).json({ error: "Username already exists" });

        // Hash Password using bcrypt 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            
        // Generate JWT Token here
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save(); // Save it in the Database

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }
        else
        {
            res.status(400).json({error: "Invalid user data"});
        }

    } catch (error) {
        console.log("Error is in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error !" });
    }
}

export const login = async(req,res) => {
    try {
        const {username, password} = req.body;

        const user = await User.findOne({username});  // finding user from mongodb database
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || ""); // if user exists then compare with user.password else with ""

        if(!user || !isPasswordCorrect) // user does not exists or password is not correct
        {
          return res.status(400).json({error: "Invalid Username or password !"});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error is in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error !" });
    }
}

export const logout = (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0}); // Delete the cookie while logout
        res.status(200).json({message: "Logged out Successfully !"});
    } catch (error) {
        console.log("Error is in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error !" });  
    }
}

