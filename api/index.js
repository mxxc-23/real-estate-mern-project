import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from "cors";

import userRouter from "./routes/user.routes.js";
import developerRouter from "./routes/developer.routes.js";
import authRouter from "./routes/auth.route.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
   console.log("MongoDB connected");
}).catch((err) => {
   console.log("Error: " + err.message)
})

const app = express();
app.use(express.json());

app.use(cors())

app.listen(3001, () => {
   console.log("Server listening on port 3001!");
})

//request: from the client that you give to the server
//response: from the server that you give to the client
app.use(userRouter)
app.use(developerRouter)
app.use(authRouter)
app.use(propertyRouter)

app.use((error, request, response, next) => {
   const statusCode = error.statusCode || 500;
   const message = error.message || "Internal server error";
   return response(statusCode).json({
      success: false,
      statusCode,
      message
   })
})