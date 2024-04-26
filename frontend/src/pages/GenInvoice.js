import React from 'react'
import "./GenInvoice.css";
import ReactToPrint from 'react-to-print';

class GenerateInvoice extends React.Component {

   

    render() {
    return (
        <>
        <ReactToPrint
        
                    trigger={() => <button className='printbtn'>Print</button>}
                    content={() => this.componentRef}
                />
            <div >
                <div className='page' ref={el => (this.componentRef = el)}>
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
                                            <div style={{marginBottom:"5px"}}>
                                                <h6 className='marketadrs1'>AGGAPE </h6>
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
                                            <h6 style={{ color: "black",textAlign:"center" ,fontSize:"15px"}}>CASH BILL</h6>
                                        </div>
                                    </div>
                                    <div className='billdet'>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1t'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"13px",paddingLeft:"2px" ,textAlign:"start"}}>Invoice No</h6>
                                            </div>
                                            <div className='billdet2t'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"14px",paddingLeft:"2px",justifyContent:"center" }}>V005/24-25</h6>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"13px",textAlign:"start",paddingLeft:"2px",justifyContent:"center" }}>Date</h6>
                                            </div>
                                            <div className='billdet2'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"14px",justifyContent:"center",paddingLeft:"2px" }}>25.04.2024</h6>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"13px",textAlign:"start",paddingLeft:"2px",justifyContent:"center" }}>PO Number</h6>
                                            </div>
                                            <div className='billdet2'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"14px",justifyContent:"center",paddingLeft:"2px" }}>4501238901</h6>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "row" }}>
                                            <div className='billdet1v'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"13px",textAlign:"start",justifyContent:"center",paddingLeft:"2px" }}>Vendor code</h6>
                                            </div>
                                            <div className='billdet2v'>
                                                <h6 style={{color:"black", margin: "0px",fontSize:"14px",justifyContent:"center" ,paddingLeft:"2px"}}>110070</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <table style={{ borderCollapse: "collapse" }}>
                                <tr>
                                    <th className='mrphead'>Article No</th>
                                    <th className='modelhead'>COMMODITY</th>
                                    <th className='hsnhead'>HSN CODE</th>
                                    <th className='unithead'>UNIT PRICE</th>
                                    <th className='qtyhead'>QUANTITY</th>
                                    <th className='grosshead'>GROSS PRICE</th>
                                </tr>
                            </table>
                            <table style={{ borderCollapse: "collapse",border:"0px" }}>
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <th className='mrp'>
                                        mrp
                                        
                                        </th>
                                    <th className='model'>model</th>
                                    <th className='hsn'>hsn</th>
                                    <th className='unit'>unit</th>
                                    <th className='qty' >
                                        <h6 style={{margin:"0px",fontSize:"10px"}}>qty</h6>
                                        <h6 style={{margin:"0px"}}>qty</h6>
                                        <h6 style={{margin:"0px"}}>qty</h6>
                                        <h6 style={{margin:"0px"}}>qty</h6>
                                    <h6 className='totalqty'>total</h6>
                                    </th>
                                    <th className='gross'>test</th>
                                    
                                </div>
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
}
export default GenerateInvoice

