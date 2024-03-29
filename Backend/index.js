
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());




 const CONNECTION_URL ="mongodb+srv://Rohit:123@cluster0.xqoa6nc.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5001;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
