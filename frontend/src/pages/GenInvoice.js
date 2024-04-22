import React, { useState } from 'react'
import HeaderComp from "../components/header"
import { Select, Input, InputNumber, Checkbox, DatePicker } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import "./getinvoice.css"

function GenerateInvoice() {

  const [size] = useState('large');
    const [invoiceNo,setInvoiceNo] =useState("")
  const [Date,setDate] =useState("")
  const [Marketplc,setMarketplc] =useState("")
  const [Address,SetAddress] =useState("")
  const [POno,setPOno] =useState("")
  const [Vendorc,setVendorc] =useState("")
  const [Mrpart,setMrpart] =useState("")
  const [Models, setModels] = useState([])
  const [Instructions, setInstructions] = useState("")
  const [Acno, setAcno] = useState("")
  const [Taxmethod, setTaxmethod] = useState("")
  const [addgst, setAddgst] = useState(true)
  const [Genmrp, setGenmrp] = useState(true)


  const options = [
    { value: 'orange', label: 'Orange' },
    { value: 'banana', label: 'bbbbb' },
    { value: 'bannnana', label: 'Banana' },
  ];

  

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

  console.log(Genmrp);
  return (
    <>
      <HeaderComp />
      <div style={{ padding: "30px" }}>
        <div className='invdiv'>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "18%" }}>Invoice No</h5>
            <h5 style={{ marginRight: "15%" }}>Last Invoice No</h5>
            <h5 style={{ marginRight: "0%" }}>Date</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>

            <Input value={invoiceNo} onChange={(event)=>{setInvoiceNo(event.target.value)}} suffix="/24-25" placeholder="Invoice No (V001)" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Input style={{ marginRight: "5%", width: "200px" }} value={"V005/24-25"} readOnly/>
            <DatePicker format={"DD.MM.YYYY"} />
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
              defaultValue="Market Place"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <Select
              size={size}
              defaultValue="Address"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <Input placeholder="P.O Number" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Input placeholder="Vendor Code" size='large' style={{ width: "200px", marginRight: "5%" }} />
          </div>


          <div style={{ display: "flex", paddingLeft: "20px", marginBottom: "-25px" }}>
            <h5 style={{ marginRight: "17%" }}>MRP / Art No</h5>
            <h5 style={{ marginRight: "19%" }}>Add Models</h5>
          </div>
          <div style={{ display: "flex", margin: "20px" }}>
            <Select
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
                      options={options}
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
            <Input placeholder="Instructions" size='large' style={{ width: "200px", marginRight: "5%" }} />
            <Select
              size={size}
              defaultValue="A/c No"
              style={{
                width: 200, marginRight: "5%"
              }}
              options={options}
            />
            <Select
              size={size}
              defaultValue="Tax Method"
              style={{
                width: 200,
              }}
              options={options}
            />
          </div>
          <div style={{ display: "flex", margin: "20px" , marginTop: "40px"}}>
            <Checkbox checked={addgst} onChange={(event)=>{setAddgst(event.target.value)}} size="large" style={{ color: "white", marginRight: "5%" }}>Add to GST records</Checkbox>
            <Checkbox checked={Genmrp} onChange={(event) => setGenmrp(event.target.checked)} size="large" style={{ color: "white", marginRight: "5%" }}>Generate MRP</Checkbox>
          </div>
          <button onClick={handleAdd}>generate</button>
        </div>
      </div>
    </>
  )
}

export default GenerateInvoice

