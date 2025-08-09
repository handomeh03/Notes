import express from "express"
import { login, signup } from "../Controller/userController.js";
export const UserRouter=express.Router();
UserRouter.post("/login",login);
UserRouter.post("/signup",signup)
