import Invoices from "../models/InvoicesModel.js";


export const AddtoGSTrecord = async (req, res) => {
  try {
    const markname = req.body["marketname"]
    const marketid = req.body["marketid"]
    const Markadrs = req.body["Markadrs"]
    const invNo = req.body["invNo"]
    const date = req.body["date"]
    const poNo = req.body["poNo"]
    const mrpart = req.body["mrpart"]
    const billCont = req.body["billCont"]
    const grandtotal = req.body["grandtotal"]
    const subtotal = req.body["subtotal"]
    const tax = req.body["tax"]
    const vehicleNo = req.body["vehicleNo"]
    const instruction = req.body["instruction"]
    const Tqty = req.body["Tqty"]
    const taxmeth = req.body["taxmeth"]
    let Invoice = await Invoices.findOne({ invNo: invNo });

    if (!Invoice) {
      Invoice = new Invoices({
        marketname: markname,
        marketid: marketid,
        Markadrs: Markadrs,
        invNo: invNo,
        date: date,
        poNo: poNo,
        mrpart: mrpart,
        billCont: billCont,
        grandtotal: grandtotal,
        subtotal: subtotal,
        tax: tax,
        vehicleNo: vehicleNo,
        instruction: instruction,
        Tqty: Tqty,
        taxmeth: taxmeth

      });
    } else {

      return res.status(403).json({ error: 'Invoice aldready exist' });
    }


    await Invoice.save();

    res.status(200).json({ Invoice });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const GetallIvoices = async (req, res) => {
  try {
    const Allinvoice = await Invoices.find({});
    res.status(200).send({
      success: true,
      Allinvoice,

    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all invoice",
    });
  }
};

export const Getinvoicebyid = async (req, res) => {
  const id = req.params.id;
  try {
    const invoice = await Invoices.findById(id);

    res.status(200).send({
      success: true,
      invoice

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting invoice",
    });
  }
};

export const GetMonthlyInvoicces = async (req, res) => {

  const startDate = req.query["startDate"]
  const endDate = req.query["endDate"]
  console.log(req.query,"body");

  try {
    const allinvoices = await Invoices.find({
      date: { $gte: startDate, $lte: endDate }
    });

    res.status(200).send({
      success: true,
      allinvoices

    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting invoice",
    });
  }
};