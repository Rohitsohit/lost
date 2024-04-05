import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    category: { type: String, required: true },
    details: { type: String, required: true },
    location: { type: String, required: true },
    // user:{type:String},
    // email : {type: String}
     images: [{ type: String}]
});

export default mongoose.model('LostItem', itemSchema);
