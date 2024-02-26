import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
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