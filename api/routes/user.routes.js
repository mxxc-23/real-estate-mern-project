import express from 'express';
import { userTest } from '../controllers/user.controller.js';
const router = express.Router();

//request: from the client that you give to the server
//response: from the server that you give to the client
router.get('/user', userTest)

export default router;

