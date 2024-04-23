import express from "express";
import { CreateProducts, UpdateProducts, getCatlogbyname, getallcatlogs } from "../controllers/ProductsController.js";

const router = express.Router();




router.post("/products/:catlog",CreateProducts);

router.post("/update-products/:id",UpdateProducts);

router.get("/products/get-catlogs",getallcatlogs);

router.get("/products/get-catlog/:catlogname",getCatlogbyname);


export default router;