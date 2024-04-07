import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    
        members:Array

        },
        {
            timestamps:true
        }
);

export default mongoose.model('chatSchema', chatSchema);
