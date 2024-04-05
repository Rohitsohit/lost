import express from "express";
import { getItems, storeItems } from "../controller/item.js";

const router = express.Router();

router.post('/add-item',storeItems);
router.get('/',getItems);






export default router;