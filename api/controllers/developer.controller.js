import Developer from '../models/developer.model.js';
const developerController = {}

developerController.retrieveDevelopers = async (request, response) => {
   try {
      
   } catch (error) {

   }
}

developerController.createDeveloper = async (request, response) => {
   const {developer_name, developer_site}= request.body;
   try {
      const newDeveloper = new Developer({developer_name, developer_site})
      await newDeveloper.save();

      response.status(200).json(newDeveloper);
   } catch (error) {
      response.status(500).json({error: error});
   }
}

export default developerController;