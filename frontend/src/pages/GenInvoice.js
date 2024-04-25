import React from 'react'
import HeaderComp from '../components/header'
import "./GenInvoice.css"

function GenerateInvoice() {
    return (
        <>
            <HeaderComp />
            <div style={{ display: "flex", justifyContent: "center", padding: "30px" }}>
                <div className='page'>
                    <div className='invmain'>
                        <div className='head'>
                            <img style={{ width: "45%", height: "35%" }} src='https://static.wixstatic.com/media/c1ec53_cdb43083bb05441ca9fb28a5027a7306~mv2.webp' alt='' ></img>
                            <h1 style={{ color: "black", fontSize: "x-large" }}>Tax Invoice</h1>
                        </div>
                        <div className='subhead'>
                            <h4 className='compmadrs'>VISION INDUSTRIES</h4>
                            <h5 className='compadrs'>BRAHMAPURAM P.O, AMBALAMEDU - 682303</h5>
                            <h5 className='compadrs'>KOCHI, KERALA, INDIA</h5>
                            <h5 className='compadrs'>GSTIN NO : 32AEQPC7004Q1ZB</h5>
                            <h5 className='compadrs'>Phone : +91 9447580387, 9400990387</h5>
                            <h5 className='compadrs'>E mail : visionquartz@rediffmail.com</h5>
                            <h5 className='compadrs'>Udyog Aadhaar : UDYAM-KL-02-0018645</h5>
                        </div>
                        <h6 style={{ color: "black", marginBottom: "0px" }}>To,</h6>
                        <div className='invcontent'>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className='marketdet'>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <h6 style={{ color: "black", textAlign: "start", marginTop: "0" }}>M/s</h6>
                                            <div>
                                                <h6 className='marketadrs'>AGGAPE </h6>
                                                <h6 className='marketadrs'>Aggape hills Pattimattom</h6>
                                                <h6 className='marketadrs'>Kochi Kerala </h6>
                                                <h6 className='marketadrs'>Ph: 1234567891 </h6>
                                            </div>
                                        </div>

                                        <div className='gst'>
                                            <div>
                                                <h6 className='gst1'>GST No</h6>
                                            </div>
                                            <div>
                                                <h6 className='gst2'>32AEQPC70041ZB</h6>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='billtype'>
                                        <div>
                                            <h6 style={{ color: "black" }}>CASH BILL</h6>
                                        </div>
                                    </div>
                                    <div className='billdet'>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{ margin: "0px",fontSize:"15px" ,textAlign:"start"}}>Invoice No</h6>
                                            </div>
                                            <div>
                                                <h6 style={{ margin: "0px" }}>Invoice No</h6>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{ margin: "0px",fontSize:"15px",textAlign:"start" }}>Date</h6>
                                            </div>
                                            <div>
                                                <h6 style={{ margin: "0px" }}>Invoice No</h6>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{ margin: "0px",fontSize:"15px",textAlign:"start" }}>PO No</h6>
                                            </div>
                                            <div>
                                                <h6 style={{ margin: "0px" }}>Invoice No</h6>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{ margin: "0px",fontSize:"13px",textAlign:"start" }}>Vendor code</h6>
                                            </div>
                                            <div>
                                                <h6 style={{ margin: "0px" }}>Invoice No</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <table style={{ borderCollapse: "collapse" }}>
                                <tr>
                                    <th className='mrphead'>mrp</th>
                                    <th className='modelhead'>model</th>
                                    <th className='hsnhead'>hsn</th>
                                    <th className='unithead'>unit</th>
                                    <th className='qtyhead'>qty</th>
                                    <th className='grosshead'>gross</th>
                                </tr>
                            </table>
                            <table style={{ borderCollapse: "collapse" }}>
                                <tr>
                                    <th className='mrp'>mrp</th>
                                    <th className='model'>model</th>
                                    <th className='hsn'>hsn</th>
                                    <th className='unit'>unit</th>
                                    <th className='qty'>qty</th>
                                    <th className='gross'>gross</th>
                                </tr>
                            </table>




                            <div style={{ display: "flex", flexDirection: "row" }}>

                                <div className='comapny'>
                                    <h6 className='comapnycont'>Amount in words:</h6>
                                    <h6 className='comapnycont'>One thousand two hundred only</h6><br />
                                    <h6 className='comapnycont'>A/C No: 37647177049 </h6>
                                    <h6 className='comapnycont'>IFS Code :SBIN0001108 </h6>
                                    <h6 className='comapnycont'>Branch: State Bank of India Ambalamedu</h6>


                                </div>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <div className='amountname'>
                                        <h6 className='amtncont'>TOTAL</h6>
                                        <h6 className='amtncont'>AMOUNT</h6>
                                        <h6 className='amtncont'>SGST 9%</h6>
                                        <h6 className='amtncont'>SGST 9%</h6>
                                        <h6 className='amtncont'>GRAND TOTAL</h6>
                                    </div>
                                    <div className='bill'>
                                        <h6 className='billcont'>1233</h6>
                                        <h6 className='billcont'>1233</h6>
                                        <h6 className='billcont'>12</h6>
                                        <h6 className='billcont'>12</h6>
                                        <h6 className='billcont'>12345</h6>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default GenerateInvoice

{/* <div className='billhead'>
                                <div className='marketadrs'>
                                </div>
                                <div className='billtype'></div>
                                <div className='billdetails'>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div className='invno'></div>
                                        <div className='invnocont'></div>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div className='date'></div>
                                        <div className='datecont'></div>
                                    </div>
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                        <div className='po'></div>
                                        <div className='pocont'></div>
                                    </div>
                                </div>
                            </div>

                            <div className='gstno'>
                                <div className='gstcont1'> <h6>GST</h6></div>
                                <div className='commodity'>
                                    
                                </div>
                                <div className='auth'></div>
                                <div className='vendor'></div>
                                <div className='vendorcode'></div>
                            </div>
                            <div className='inbodyhead'>
                                <div className='mrp'></div>
                                <div className='models'></div>
                                <div className='hsn'></div>
                                <div className='uniprice'></div>
                                <div className='qty'></div>
                                <div className='grprice'></div>
                            </div>
                            <div className='invcontent2'>
                                <div className='mrpcont'></div>
                                <div className='modelscont'></div>
                                <div className='hsncont'><h6>123</h6></div>
                                <div className='unitpricecont'></div>
                                <div className='qtycont'></div>
                                <div className='grpricecont'></div>
                            </div> */}


{/* <th className='blank'></th>
                                    <th className='comapny'>
                                        <tr>Amount in words</tr>
                                        <tr>AMOUNT</tr>
                                        <tr>A/C</tr>
                                        <tr>Decleration</tr>
                                    </th>

                                    <th className='amountname' >
                                        <h6 className='amtncont'>TOTAL</h6>
                                        <h6 className='amtncont'>AMOUNT</h6>
                                        <h6 className='amtncont'>AMOUNT</h6>
                                        <h6 className='amtncont'>AMOUNT</h6>
                                    </th>

                                    <th className='billamounts'>

                                    </th> */}