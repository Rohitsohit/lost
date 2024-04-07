import express from "express";
import { createChats, findChats, findUserChats } from "../controller/chats"

const router = express.Router();

router.post("/",createChats)
router.get("/:userId",findUserChats)
router.get("/find/:firstId/:secondId",findChats)

export default router;