import React, { useEffect, useState } from 'react'
import HeaderComp from "../components/header"
import axios from 'axios';
import { Select, Input, InputNumber, Checkbox, DatePicker, Spin } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import "./getinvoice.css"

function Invoice() {

  const [size] = useState('large');
  const [invoiceNo, setInvoiceNo] = useState("")
  const [Date, setDate] = useState("")
  const [Marketplc, setMarketplc] = useState("")
  const [Address, SetAddress] = useState("")
  const [POno, setPOno] = useState("")
  const [Vendorc, setVendorc] = useState("")
  const [Mrpart, setMrpart] = useState("")
  const [Models, setModels] = useState([])
  const [Instructions, setInstructions] = useState("")
  const [Acno, setAcno] = useState("")
  const [Taxmethod, setTaxmethod] = useState("")
  const [addgst, setAddgst] = useState(true)
  const [Genmrp, setGenmrp] = useState(true)


  const [fetchcatlog, setFetchcatlog] = useState("")
  const [spinning, setSpinning] = useState(false);
  const [Catlog, setCatlog] = useState([])
  const [Markets, setMarkets] = useState([])
  const [Modellist, setModellist] = useState([])


  const options = [
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'bbbbb' },
    { value: 'bannnana', label: 'Banana' },
  ];
console.log(Models)
  const FetchMarkets = async () => {
    try {
      setSpinning(true);
      const res = await axios.get("/api/v1/records/markets/get-markets")
      console.log(res)
      setSpinning(false);
      console.log(res.data["markets"])
      setMarkets(res.data["markets"].map(market => ({ value: market._id, label: market.marketname })))

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    FetchMarkets()
  }, [])


  const FetchCatlog = async (id) => {
    console.log("calog fetch")
    try {

      setSpinning(true);
      const res = await axios.get(`/api/v1/records/markets/get-market/${id}`)
      let catlog = (res.data["linkedcatlog"])
      setVendorc(res.data["vendorcode"])
      const rescatlog = await axios.get(`/api/v1/records/products/get-catlog/${catlog}`)
      setSpinning(false);
      console.log(rescatlog.data)
      setModellist(rescatlog.data[0]["products"].map(catlog => ({ value: catlog.model, label: catlog.model })))
    } catch (error) {
      console.log(error)
    }
  }



  // ----------------------------------------------------------------

  const handleChange = (value, index, field) => {
    const updatedModels = [...Models];
    updatedModels[index] = { ...updatedModels[index], [field]: value };
    setModels(updatedModels);
  };

  const handleAdd = () => {
    setModels([...Models, { selectValue: null, inputValue: 1 }]);
  };
  const handledel = (index) => {
    const updatedModels = [...Models];
    updatedModels.splice(index, 1);
    setModels(updatedModels);
  };
  const Handledate = (date) => {
    setDate(date.format("DD.MM.YYYY"));
  };
  console.log(invoiceNo, Date, Marketplc,Models, Address, POno, Vendorc, Mrpart, Instructions, Acno, Taxmethod);
  return (
    <>
      <Spin spinning={spinning} fullscreen size='large' />
      <HeaderComp />
      <div style={{ padding: "30px" }}>
        <div className='invdiv'>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "18%" }}>Invoice No</h5>
            <h5 style={{ marginRight: "15%" }}>Last Invoice No</h5>
            <h5 style={{ marginRight: "0%" }}>Date</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>

            <Input value={invoiceNo} onChange={(event) => { setInvoiceNo(event.target.value) }} suffix="/24-25" placeholder="Invoice No (V001)" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Input style={{ marginRight: "5%", width: "200px" }} value={"V005/24-25"} readOnly />
            <DatePicker onChange={Handledate} format={"DD.MM.YYYY"} />
          </div>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "17%" }}>Market Place</h5>
            <h5 style={{ marginRight: "19%" }}>Address</h5>
            <h5 style={{ marginRight: "18%" }}>P.O No</h5>
            <h5 >Vendor Code</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <Select
              size={size}
              value={Marketplc}
              onChange={(value) => {
                setMarketplc(value);
                FetchCatlog(value)
              }}
              defaultValue="Market Place"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={Markets}
            />
            <Select
              size={size}
              value={Address}
              onChange={(value) => { SetAddress(value) }}
              defaultValue="Address"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <Input value={POno} onChange={(event) => { setPOno(event.target.value) }} placeholder="P.O Number" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Input readOnly value={Vendorc} onChange={(event) => { setVendorc(event.target.value) }} placeholder="Vendor Code" size='large' style={{ width: "200px", marginRight: "5%" }} />
          </div>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "17%" }}>MRP / Art No</h5>
            <h5 style={{ marginRight: "19%" }}>Add Models</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <Select
              value={Mrpart}
              onChange={(value) => { setMrpart(value) }}
              size={size}
              defaultValue="MRP / Art No"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <div style={{ display: "flex", flexDirection: "column", minWidth: "450px", alignItems: "center" }}>

              {Models.map((model, index) => {
                return (
                  <div style={{ display: "flex", marginBottom: "10px" }} key={index}>
                    <Select
                      size={size}
                      placeholder="Select Model"
                      value={model.selectValue}
                      onChange={(value) => handleChange(value, index, 'selectValue')}
                      defaultValue="Model"
                      style={{ width: 200, marginRight: "5%" }}
                      options={Modellist}
                    />
                    <InputNumber
                      min={1}
                      value={model.inputValue}
                      onChange={(value) => handleChange(value, index, 'inputValue')}
                      defaultValue={1}
                      style={{ width: "200px", marginRight: "5%" }}
                      size='large'
                    /><DeleteOutlined onClick={() => { handledel(index) }} style={{ fontSize: "30px" }} />
                  </div>
                )
              })}
              <PlusOutlined style={{ fontSize: "30px" }} onClick={handleAdd} />
            </div>
          </div>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "17%" }}>Instructions</h5>
            <h5 style={{ marginRight: "19%" }}>A/c No</h5>
            <h5 style={{ marginRight: "18%" }}>Tax Method</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <Input value={Instructions} onChange={(event) => { setInstructions(event.target.value) }} placeholder="Instructions" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Select
              size={size}
              value={Acno}
              onChange={(value) => { setAcno(value) }}
              defaultValue="A/c No"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <Select
              size={size}
              value={Taxmethod}
              onChange={(value) => { setTaxmethod(value) }}
              defaultValue="Tax Method"
              style={{
                width: 200,
              }}
              options={options}
            />
          </div>
          <div style={{ display: "flex", margin: "20px", marginTop: "40px" }}>
            <Checkbox checked={addgst} onChange={(event) => { setAddgst(event.target.value) }} size="large" style={{ color: "white", marginRight: "5%" }}>Add to GST records</Checkbox>
            <Checkbox checked={Genmrp} onChange={(event) => setGenmrp(event.target.checked)} size="large" style={{ color: "white", marginRight: "5%" }}>Generate MRP</Checkbox>
          </div>
          <button onClick={handleAdd}>generate</button>
        </div>
      </div>
    </>
  )
}

export default Invoice

