import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    username: { type: String},
    chat: { type: String },
});

const lostUserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    message: [messageSchema],
});

export default mongoose.model('LostProjectUser', lostUserSchema);
