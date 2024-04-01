import itemSchema from "../models/item.js"


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