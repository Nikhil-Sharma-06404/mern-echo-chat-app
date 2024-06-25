import express from "express";
import  protectRoute  from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/user.controller.js";

const router = express.Router();

// Helps to extract all users on Sidebar except the one who is logged in
router.get("/",protectRoute,getUsersForSideBar);

export default router;

