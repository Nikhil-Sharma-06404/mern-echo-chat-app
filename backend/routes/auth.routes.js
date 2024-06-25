import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Whem it'll hit/request api/auth/login then will call login callback imported from auth.controller.js 
router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

export default router;