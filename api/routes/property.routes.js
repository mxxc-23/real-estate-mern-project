import express from 'express';
import propertyController from '../controllers/property.controller.js';

const propertyRouter = express.Router();

propertyRouter.get('/api/properties', propertyController.getProperties)
propertyRouter.post('/api/create/property', propertyController.createProperty)
propertyRouter.post('/api/property', propertyController.getPropertiesByDeveloper)

export default propertyRouter;