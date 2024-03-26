import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
   console.log("MongoDB connected");
}).catch((err) => {
   console.log("Error: " + err.message)
})

const app = express();

app.listen(3001, () => {
   console.log("Server listening on port 3001!");
})

//request: from the client that you give to the server
//response: from the server that you give to the client
app.use('/api/test', userRouter)