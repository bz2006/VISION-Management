import React, { useState } from 'react'
import HeaderComp from '../components/header'
import "./productrecords.css"
import { Tabs, Select, Table, Modal, message, Button, Popconfirm,Input } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

function ProductRecords() {
    const [size] = useState('large');
    const [invoiceNo, setInvoiceNo] = useState("")
    const [catname, setcatname] = useState("")
    const [updatemp, setupdatemp] = useState(false);
    const [addmp, setaddmp] = useState(false);
    const [updatecatlog, setupdatecatlog] = useState(false);
    const [addcatlog, setaddcatlog] = useState(false);
    const [Models, setModels] = useState([])



const AddCatlog =async()=>{
    setaddcatlog(false)
    console.log("Catlog Name : ", catname,"\n",Models)
}







    const handleChange = (value, index, field) => {
        const updatedModels = [...Models];
        updatedModels[index] = { ...updatedModels[index], [field]: value };
        setModels(updatedModels);
    };
    
    const handleAdd = () => {
        setModels([...Models, { model: "", mrp: "", unitPrice: "", articleNo: "" }]);
    };
    
    const handledel = (index) => {
        const updatedModels = [...Models];
        updatedModels.splice(index, 1);
        setModels(updatedModels);
    };
    const confirm = (e) => {
        console.log(e);
        message.success('Market Place deleted');
    };

    const options = [
        { value: 'orange', label: 'Orange' },
        { value: 'banana', label: 'bbbbb' },
        { value: 'bannnana', label: 'Banana' },
    ];
    const prcolumns = [
        {
            title: 'Model',
            dataIndex: 'Model',
            key: 'Model',
        },
        {
            title: 'MRP',
            dataIndex: 'MRP',
            key: 'MRP',
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitprice',
            key: 'unitprice',
        },
        {
            title: 'Article No',
            dataIndex: 'artno',
            key: 'artno',
        },
    ];

    const prdata = [
        {
            key: '1',
            Model: '2031',
            MRP: 2600,
            unitprice: 1653,
            artno: 6789521,

        },
        {
            key: '2',
            Model: '2031',
            MRP: 2600,
            unitprice: 1653,
            artno: 6789521,

        },

    ];
    const mpcolumns = [
        {
            title: 'Market Name',
            dataIndex: 'Market',
            key: 'Market',
        },
        {
            title: 'GST No',
            dataIndex: 'GST',
            key: 'GST',
        },
        {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
        },
        {
            title: 'Vendor Code',
            dataIndex: 'vendor',
            key: 'vendor',
        },
        {
            title: 'Catlog',
            dataIndex: 'Catlog',
            key: 'Catlog',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <>
                    <Button type="primary" onClick={() => setupdatemp(true)}>Update</Button>
                    <Popconfirm
                        title="Delete Market Place"
                        description="Are you sure to delete this Market Place?"
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </>
            ),
        },
    ];

    const mpdata = [
        {
            key: '1',
            Market: 'AGGAPE',
            GST: "32AEQPC7004Q",
            Address: ["PATTIMATTION P.O KOCHI", "Kerala", "Ph: 123456789",],
            vendor: "",
            Catlog: "KERALA",

        },

    ];
    return (
        <>
            <HeaderComp />
            <div className='tabdiv'>
                <Tabs defaultActiveKey="1" >

                    <TabPane tab={<span style={{ color: 'white' }}>Market Places</span>} key="1">
                        <Button type="primary" style={{ marginRight: "50px" }} onClick={() => setaddmp(true)}>Add</Button>
                        <div className="table-container">
                            <Table columns={mpcolumns} dataSource={mpdata} style={{ width: "fit-content", fontSize: "50px" }} />
                        </div>
                    </TabPane>


                    <TabPane tab={<span style={{ color: 'white' }}>Product Records</span>} key="2">
                        <div>
                            <Select
                                size={size}
                                value={invoiceNo}
                                onChange={(value) => setInvoiceNo(value)}
                                defaultValue="Market Place"
                                style={{
                                    width: 200, marginRight: "5%"
                                }}
                                options={options}
                            />
                            <div>
                                <div style={{ display: "flex" }}>
                                    <h1 style={{ color: "white", marginRight: "450px" }}>Catlog : Kerala</h1>
                                    <Button type="primary" style={{ marginRight: "50px" }} onClick={() => setaddcatlog(true)}>Add</Button>
                                    <Button type="primary" style={{ marginRight: "50px" }} onClick={() => setupdatecatlog(true)}>Update</Button>
                                    <Popconfirm
                                        title="Delete Market Place"
                                        description="Are you sure to delete this Market Place?"
                                        onConfirm={confirm}
                                        okText="Yes"
                                        cancelText="No"
                                    >
                                        <Button danger>Delete</Button>
                                    </Popconfirm>
                                </div>

                                <div className="table-container">
                                    <Table columns={prcolumns} dataSource={prdata} style={{ width: "fit-content", fontSize: "50px" }} />
                                </div>
                            </div>
                        </div>

                    </TabPane>
                </Tabs>
            </div>
            {/* --------------------------------- */}
            <>
                <Modal
                    title="Add Catlog"
                    centered
                    open={addcatlog}
                    onOk={AddCatlog}
                    onCancel={() => setaddcatlog(false)}
                    width={1000}
                >
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <div style={{ display: "flex", flexDirection: "column", minWidth: "600px", alignItems: "center" }}>
                    <Input
                    value={catname}
                    onChange={(event) => setcatname(event.target.value)}
                    placeholder="Catlog Name"
                    size='large'
                    style={{ width: "200px",marginBottom:"30px"}}
                />
    {Models.map((model, index) => {
        return (
            <div style={{ display: "flex", marginBottom: "10px" }} key={index}>
                <Input
                    value={model.model}
                    onChange={(e) => handleChange(e.target.value, index, 'model')}
                    placeholder="Model"
                    size='large'
                    style={{ width: "200px", marginRight: "10px" }}
                />
                <Input
                    value={model.mrp}
                    onChange={(e) => handleChange(e.target.value, index, 'mrp')}
                    placeholder="MRP"
                    type='number'
                    size='large'
                    style={{ width: "150px", marginRight: "10px" }}
                />
                <Input
                    value={model.unitPrice}
                    size='large'
                    onChange={(e) => handleChange(e.target.value, index, 'unitPrice')}
                    placeholder="Unit Price"
                    type='number'
                    style={{ width: "150px", marginRight: "10px" }}
                />
                <Input
                    value={model.articleNo}
                    size='large'
                    onChange={(e) => handleChange(e.target.value, index, 'articleNo')}
                    placeholder="Article No"
                    style={{ width: "150px", marginRight: "10px" }}
                />
                <DeleteOutlined onClick={() => handledel(index)} style={{ fontSize: "20px", marginTop: "5px" }} />
            </div>
        );
    })}
    <PlusOutlined style={{ fontSize: "30px", marginBottom: "10px" }} onClick={handleAdd} />
</div>
                    </div>
                </Modal>
            </>
            {/* --------------------------------- */}
            <>
                <Modal
                    title="Update Catlog"
                    centered
                    open={updatecatlog}
                    onOk={() => setupdatecatlog(false)}
                    onCancel={() => setupdatecatlog(false)}
                    width={1000}
                >
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                        <p>some contents...</p><p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </div>
                </Modal>
            </>
            {/* --------------------------------- */}
            <>
                <Modal
                    title="Add Market Place"
                    centered
                    open={addmp}
                    onOk={() => setaddmp(false)}
                    onCancel={() => setaddmp(false)}
                    width={1000}
                >
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                        <p>some contents...</p><p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </div>
                </Modal>
            </>
            <>
                <Modal
                    title="Update Market Place"
                    centered
                    open={updatemp}
                    onOk={() => setupdatemp(false)}
                    onCancel={() => setupdatemp(false)}
                    width={1000}
                >
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>

                        <p>some contents...</p><p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </div>
                </Modal>
            </>
        </>

    )
}

export default ProductRecords