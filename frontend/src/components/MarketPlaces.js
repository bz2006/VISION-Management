import React, { useState, useEffect } from 'react'
import "../pages/productrecords.css"
import axios from "axios"
import { Select, Table, Modal, message, Button, Popconfirm, Input } from "antd";
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';


function MarketPlaces() {


    const [fetchcatlog, setFetchcatlog] = useState("")
    const [catname, setcatname] = useState("")
    const [tcatname, settcatname] = useState("")


    const [marketname, setmarketname] = useState("")
    const [gst, setgst] = useState("")
    const [address, setaddress] = useState([""])
    const [vendorcode, setvendorcode] = useState("")
    const [Catlog, setCatlog] = useState("")

    console.log(address)

    const [Catlogid, setCatlogid] = useState("")
    const [updatemp, setupdatemp] = useState(false);
    const [addmp, setaddmp] = useState(false);
    const [updatecatlog, setupdatecatlog] = useState(false);
    const [addcatlog, setaddcatlog] = useState(false);
    const [Models, setModels] = useState([])
    const [options, setoptions] = useState([])

    const GetCatlog = async () => {
        setaddcatlog(false)
        try {
            const res = await axios.get("/api/v1/records/products/get-catlogs")
            setoptions(res.data.map(catlog => ({ value: catlog.catlogname, label: catlog.catlogname })))
        } catch (error) {

        }
    }
    //console.log(Catlog)
    useEffect(() => {
        GetCatlog()
    }, [])


    const handleAddupdate = async () => {
        const newModel = { Model: '', MRP: 0, unitprice: 0, artno: '' };
        setModels([...Models, newModel]);
    };

    const handleChangeupdate = (value, index, field) => {
        const updatedModels = [...Models];
        updatedModels[index][field] = value;
        setModels(updatedModels);
    };

    const handleChange = (value, index) => {
        const updatedAddresses = [...address];
        updatedAddresses[index] = value;
        setaddress(updatedAddresses);
    };

    // Function to add a new input field
    const handleAdd = () => {
        setaddress([...address, ""]);
    };

    // Function to delete an input field
    const handleDelete = (index) => {
        const updatedAddresses = [...address];
        updatedAddresses.splice(index, 1);
        setaddress(updatedAddresses);
    };
    const confirm = (e) => {
        console.log(e);
        message.success('Market Place deleted');
    };




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
            <Button type="primary" style={{ marginRight: "50px" }} onClick={() => setaddmp(true)}>Add</Button>
            <div className="table-container">
                <Table columns={mpcolumns} dataSource={mpdata} style={{ width: "fit-content", fontSize: "50px" }} />
            </div>
            <>
                <Modal
                    title="Add Market Place"
                    centered
                    open={addmp}
                    onOk={() => setaddmp(false)}
                    onCancel={() => setaddmp(false)}
                    width={800}
                >
                    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ marginRight: "24%" }}>Market Name</h5>
                            <h5 style={{ marginRight: "28%" }}>GST No</h5>
                            <h5 >Vendor Code</h5>
                        </div>

                        <div >
                            <Input
                                value={marketname}
                                onChange={(event) => setmarketname(event.target.value)}
                                placeholder="Market Name"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                            <Input
                                value={gst}
                                onChange={(event) => setgst(event.target.value)}
                                placeholder="GST No"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                            <Input
                                value={vendorcode}
                                onChange={(event) => setvendorcode(event.target.value)}
                                placeholder="Vendor Code"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ marginRight: "30%" }}>Address</h5>
                            <h5 >Link Catlog</h5>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginRight: "20px", alignItems: "center" }}>
                                {address.map((address, index) => (
                                    <div key={index} style={{ marginBottom: "10px" }}>
                                        <Input
                                            value={address}
                                            onChange={(e) => handleChange(e.target.value, index)}
                                            placeholder="Address"
                                            size='large'
                                            style={{ width: "250px", marginRight: "10px" }}
                                        />
                                        <DeleteOutlined onClick={() => handleDelete(index)} style={{ fontSize: "20px", marginTop: "5px" }} />
                                    </div>
                                ))}
                                <PlusOutlined style={{ fontSize: "40px", marginRight: "100px", marginLeft: "30px" }} onClick={handleAdd} />


                            </div>

                            <Select
                                size='large'
                                value={Catlog}
                                onChange={(value) => setCatlog(value)}
                                defaultValue="Market Place"
                                style={{
                                    width: 200, marginRight: "5%"
                                }}
                                options={options}
                            />
                        </div>
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

                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ marginRight: "24%" }}>Market Name</h5>
                            <h5 style={{ marginRight: "28%" }}>GST No</h5>
                            <h5 >Vendor Code</h5>
                        </div>

                        <div >
                            <Input
                                value={marketname}
                                onChange={(event) => setmarketname(event.target.value)}
                                placeholder="Market Name"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                            <Input
                                value={gst}
                                onChange={(event) => setgst(event.target.value)}
                                placeholder="GST No"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                            <Input
                                value={vendorcode}
                                onChange={(event) => setvendorcode(event.target.value)}
                                placeholder="Vendor Code"
                                size='large'
                                style={{ width: "200px", marginRight: "50px" }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <h5 style={{ marginRight: "30%" }}>Address</h5>
                            <h5 >Link Catlog</h5>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ display: "flex", flexDirection: "column", marginRight: "20px", alignItems: "center" }}>
                                {address.map((addr, index) => (
                                    <div key={index} style={{ marginBottom: "10px" }}>
                                        <Input
                                            value={addr}
                                            onChange={(e) => handleChange(e.target.value, index)}
                                            placeholder="Address"
                                            size='large'
                                            style={{ width: "250px", marginRight: "10px" }}
                                        />
                                        <DeleteOutlined onClick={() => handleDelete(index)} style={{ fontSize: "20px", marginTop: "5px" }} />
                                    </div>
                                ))}
                                <PlusOutlined style={{ fontSize: "40px", marginRight: "100px", marginLeft: "30px" }} onClick={handleAdd} />


                            </div>

                            <Select
                                size='large'
                                value={Catlog}
                                onChange={(value) => setCatlog(value)}
                                defaultValue="Market Place"
                                style={{
                                    width: 200, marginRight: "5%"
                                }}
                                options={options}
                            />
                        </div>
                    </div>
                </Modal>
            </>
        </>
    )
}

export default MarketPlaces