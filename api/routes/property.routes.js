import express from 'express';
import propertyController from '../controllers/property.controller.js';

const propertyRouter = express.Router();

propertyRouter.get('/api/create/property', (req, res)=> {
   res.send("blagh!")
})

export default propertyRouter;