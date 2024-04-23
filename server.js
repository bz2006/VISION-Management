import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectdb from "./config/db.js";
import cors from "cors"
import bodyParser from 'body-parser';



dotenv.config();

connectdb();
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.send("<h1>Welcome to VISION-Mangement</h1>");
  });

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('****Server Started on '+process.env. DEV_MODE +" Mode PORT:"+ PORT+"****")
})
