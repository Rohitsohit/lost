
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import user from "./routes/user.js";
import item from './routes/item.js'
import ChatRoute from "./routes/chatRoutes.js"
import MessageRoute from "./routes/messageRoutes.js"
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user",user);

app.use("/lost-items",item)

app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)

 const CONNECTION_URL ="mongodb+srv://Rohit:123@cluster0.xqoa6nc.mongodb.net/?retryWrites=true&w=majority";
const PORT = 5001;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
