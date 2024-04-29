import Invoices from "../models/InvoicesModel.js";


export const AddtoGSTrecord = async (req, res) => {
  try {
    const markname = req.body["marketname"]
    const marketid = req.body["marketid"]
    const Markadrs = req.body["Markadrs"]
    const invNo = req.body["invNo"]
    const date = req.body["date"]
    const poNo = req.body["poNo"]
    const billCont = req.body["billCont"]
    const grandtotal = req.body["grandtotal"]
    const subtotal =req.body["subtotal"]
    const tax = req.body["tax"]
    const vehicleNo = req.body["vehicleNo"]
    const instruction = req.body["instruction"]
    const Tqty = req.body["Tqty"]
    const taxmeth=req.body["taxmeth"]
    let Invoice = await Invoices.findOne({ invNo: invNo });

    if (!Invoice) {
      Invoice = new Invoices({
        marketname: markname,
        marketid: marketid,
        Markadrs: Markadrs,
        invNo: invNo,
        date: date,
        poNo: poNo,
        billCont: billCont,
        grandtotal:grandtotal,
        subtotal: subtotal,
        tax: tax,
        vehicleNo: vehicleNo,
        instruction: instruction,
        Tqty: Tqty,
        taxmeth:taxmeth

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

export const UpdateMarket = async (req, res) => {
  try {
    const Marketid = req.params.id
    const mpname = req.body["upmarketname"]
    const gst = req.body["upgst"]
    const address = req.body["upaddress"]
    const vendorcode = req.body["upvendorcode"]
    const Catlog = req.body["upCatlog"]

    let market = await Markets.findByIdAndUpdate(
      Marketid,
      {
        marketname: mpname,
        gstNo: gst,
        address: address,
        vendorcode: vendorcode,
        linkedcatlog: Catlog
      },
      { new: true }

    )

    if (!market) {
      return res.status(404).json({ error: 'Product not found or cannot be updated.' });
    }
    res.json({ message: 'Product updated successfully', updatedmarket: market });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const deleteMarket = async (req, res) => {
  try {
    const id = req.params.id;
    await Markets.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "market Deleted Successfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error while deleting market",
      error,
    });
  }
};

