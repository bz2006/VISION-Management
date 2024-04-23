import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectdb from "./config/db.js";
import cors from "cors"
import bodyParser from 'body-parser';
import ProductRoute from "./routes/ProductRoute.js"



dotenv.config();

connectdb();
const app = express()

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use("/api/v1/records",ProductRoute)

app.get("/", (req, res) => {
    res.send("<h1>Welcome to VISION-Mangement</h1>");
  });

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('****Server Started on '+process.env. DEV_MODE +" Mode PORT:"+ PORT+"****")
})
