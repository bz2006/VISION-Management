import express from "express";
import { GetAnalytics, UpdateAnalytics } from "../controllers/analyticsController.js";


const router = express.Router();

router.post("/update-analytics",UpdateAnalytics)

router.get("/get-analytics",GetAnalytics)



export default router;

//app.use("/api/v1/analytics",AnalyticsRoutes)