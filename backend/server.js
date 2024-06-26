import express from "express"; 
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js"
import authRoutes from "./routes/auth.routes.js"
import path from "path";
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


dotenv.config(); // To set up Environment variables

const port = 5000 || process.env.PORT ;
const __dirname = path.resolve();

// Helps to extract/parse field or incoming requests from req.body
app.use(express.json()); 
app.use(cookieParser()); // To access cookies from jwt web token

// MiddleWares using Express.js -> Whenever we go to /api/auth we will call authRoutes
// if authRoutes : /login then it will hit the route /api/auth/login
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server Running on Port ${port}`)
});