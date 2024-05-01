import express from "express"
import dotenv from "dotenv"
import morgan from "morgan";
import connectdb from "./config/db.js";
import cors from "cors"
import bodyParser from 'body-parser';
import cron from 'node-cron';
import ProductRoute from "./routes/ProductRoute.js"
import MarketsRoute from "./routes/MarketsRoute.js"
import InvoiceRoutes from "./routes/InvoiceRoutes.js"
import AnalyticsRoutes from "./routes/AnalyticsRoutes.js"
import { sendEmail } from "./middlewares/nodemailerMiddleware.js";
import { FetchMonthlyInvoices } from "./middlewares/MonthlyInvoice.js";


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
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use("/api/v1/records/products", ProductRoute)
app.use("/api/v1/records/markets", MarketsRoute)
app.use("/api/v1/invoices", InvoiceRoutes)
app.use("/api/v1/analytics", AnalyticsRoutes)

app.get("/", (req, res) => {
  res.send("<h1>Welcome to VISION-Mangement</h1>");
});


cron.schedule('5 18 * * *', () => {
  sendEmail(); 
});


app.post('/send-email', sendEmail);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log('****Server Started on ' + process.env.DEV_MODE + " Mode PORT:" + PORT + "****")
})
