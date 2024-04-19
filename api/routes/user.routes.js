import express from 'express';
import userController from '../controllers/user.controller.js';
const router = express.Router();

//request: from the client that you give to the server
//response: from the server that you give to the client
router.get('/api/user', userController.userTest)

export default router;

