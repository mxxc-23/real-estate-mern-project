import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
   {
      property_title: {
         type: String,
         required: true
      },
      property_description: {
         type: String,
         required: false
      },
      property_features: [{
         type: String,
         required: false
      }],
      property_type: {
         type: String,
         required: false
      },
      developer_id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Developer'
      },
      is_Active: {
         type: Boolean,
         default: true,
      }
   }, 
   {
      timestamps: true
   }
)

const Property = mongoose.model("Property", propertySchema);

export default Property;