import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import user from "./routes/user.js";
import item from './routes/item.js'
import ChatRoute from "./routes/chatRoutes.js"
import MessageRoute from "./routes/messageRoutes.js"

import 'dotenv/config'
const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user",user);

app.use("/lost-items",item)

app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

app.use("/",(req,res)=>{
  res.json("server is stated....")
})

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
