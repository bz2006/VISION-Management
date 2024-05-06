import express from "express";
import { DeleteAnalytics, GetAnalytics, UpdateAnalytics } from "../controllers/analyticsController.js";


const router = express.Router();

router.post("/update-analytics",UpdateAnalytics)

router.get("/get-analytics",GetAnalytics)

router.post("/delete-analytics",DeleteAnalytics)



export default router;

//app.use("/api/v1/analytics",AnalyticsRoutes)