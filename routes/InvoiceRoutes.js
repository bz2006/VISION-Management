import express from "express";
import { AddtoGSTrecord, GetallIvoices, Getinvoicebyid } from "../controllers/InvoiceController.js";

const router = express.Router();

router.post("/add-invoice",AddtoGSTrecord)

router.get("/get-allinvoice",GetallIvoices)

router.get("/get-invoice/:id",Getinvoicebyid)

export default router;