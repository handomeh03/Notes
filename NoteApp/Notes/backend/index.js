import express from "express";
import dotenv from "dotenv"
import { UserRouter } from "./Router/UserRouter.js";
import { initdb } from "./db/connection.js";
import cors from "cors";
import { NoteRouter } from "./Router/NoteRouter.js";
import { requireAuth } from "./helper/requireAuth.js";
dotenv.config();

const app=express();
const PORT=process.env.PORT;

app.use(cors({
    origin:process.env.CLIENT_ORIGIN
}))

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    next();
})


app.use("/api/user",UserRouter)

app.use("/api/notes",requireAuth,NoteRouter)


initdb().then(()=>{
    app.listen(PORT,()=>{
    console.log("the server is run at  "+ PORT);
})
}).catch((e)=>{
    console.log(e);
})