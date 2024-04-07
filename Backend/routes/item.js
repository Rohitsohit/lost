import express from "express";
import { getItems, searchItems, storeItems } from "../controller/item.js";

const router = express.Router();

router.post('/add-item',storeItems);
router.get('/',getItems);

router.get("/search",searchItems)




export default router;