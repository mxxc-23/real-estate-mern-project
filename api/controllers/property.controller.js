import Property from "../models/property.model.js";
const propertyController = {};

propertyController.getPropertiesByDeveloper = async (request, response) => {
   const { developer_id } = request.body;
   try {
      const properties = await Property.find({ developer_id: developer_id });
      
      response.status(200).json(properties);
   } catch (error) { 
      response.status(500).json(error);
   }
};

propertyController.getProperties = async (request, response) => {
   try {
      
      const properties = await Property.find();
      
      response.status(200).json(properties);
   } catch (error) {
      response.status(500).json(error);
   }
}

propertyController.createProperty = async (request, response) => {
   try {
      const newProperty = new Property({
         property_title: request.body.property_title,
         property_description: request.body.property_description,
         property_type: request.body.property_type,
         property_features: request.body.property_features,
         developer_id: request.body.developer_id,
      });

      await newProperty.save();

      response.status(200).json(newProperty);
   } catch (error) {
      response.status(500).json(error);
   }
};

export default propertyController;
