//createChats
//getUserchats
//find chats

import chatModel from "../models/chatModel";

export const createChats =async (req,res)=>{
        const {firstId,secondId} = req.body;
        try {
            const chat = await chatModel.findOne({
                members : {
                    $all : [firstId,secondId]
                }
            })
            if(chat) return res.status(200).json(chat);

            const newChat = new chatModel({
                members:[firstId,secondId]
            })
            const response = await newChat.save()
            res.status(200).json(response);

        } catch (error) {
            console.log(error)
        }
}

export const findUserChats = async(res,req) =>{
        const userId = req.params.userId;
        try {
            const chats = await chatModel.find({
                members:{$in : [userId]}
            })

            res.status(200).json(chats);

        } catch (error) {
            console.log(error);
        }
}

export const findChats = async(res,req)=>{
    const {firstId,secondId} = req.params;
        try {
            const chats = await chatModel.find({
                members : {$all : [firstId,secondId]}
            })

            res.status(200).json(chats);

        } catch (error) {
            console.log(error);
        }
}