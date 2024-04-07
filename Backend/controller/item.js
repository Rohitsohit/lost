import itemSchema from "../models/item.js"
import path from "path";
export const storeItems = async (req, res) => {
   
    const items = req.body;
    const newItems = new itemSchema(items);
    try {
        const dataSaved = await newItems.save();
        res.json(dataSaved);
    } catch (error) {
        console.log(error);
    }

}

export const getItems = async (req, res) => {
    
    try {
        const itemData = await itemSchema.find();
        res.status(200).send(itemData);
        
      } catch (error) {
        res.status(404).json({ message: error.message });
      }

}

export const searchItems = async (req,res,next) => {
    console.log(req.query)
    try {
        const { category, location } = req.query;
        let query = {};
    
        if (category) {
          query.category = category;
        }
    
        if (location) {
          query.location = location;
        }
    
        const items = await itemSchema.find(query);
        res.json(items);
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
      }
};


