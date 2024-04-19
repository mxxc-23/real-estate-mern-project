import express from 'express';
import developerController from '../controllers/developer.controller.js';

const developerRouter = express.Router();

developerRouter.get('/api/developers', developerController.retrieveDevelopers);
developerRouter.post('/api/create/developer', developerController.createDeveloper);

export default developerRouter;