import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    category: { type: String, required: true },
    details: { type: String, required: true },
    location: { latitude:String,
      longitude:String            
    },
    user:{type:String},
    email : {type: String},
    userId:{type: String},
     images: [{ type: String}]

},
{
    timestamps: true,
  }

);

export default mongoose.model('LostItem', itemSchema);
