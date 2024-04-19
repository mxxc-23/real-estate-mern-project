import mongoose from "mongoose";

const developerSchema = new mongoose.Schema(
   {
      developer_name: {
         type: String,
         required: true
      },
      developer_site: {
         type: String,
         required: false
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

const Developer = mongoose.model("Developer", developerSchema);

export default Developer;