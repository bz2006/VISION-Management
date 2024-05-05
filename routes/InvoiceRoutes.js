import express from "express";
import { AddtoGSTrecord, GetMonthlyInvoicces, GetallIvoices, Getinvoicebyid, deleteInvoice } from "../controllers/InvoiceController.js";

const router = express.Router();

router.post("/add-invoice",AddtoGSTrecord)

router.get("/get-allinvoice",GetallIvoices)

router.get("/get-invoice/:id",Getinvoicebyid)

router.get("/get-monthly-invoices",GetMonthlyInvoicces)

router.delete("/delete-invoice/:id",deleteInvoice)

export default router;