import React, { useRef, useState, useEffect } from 'react';
import { Table, Input, Button, Spin, Space, DatePicker } from 'antd';
import axios from "axios"
import { SearchOutlined } from '@ant-design/icons';
import "./allinv.css"
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import HeaderComp from '../components/header';

const { RangePicker } = DatePicker;

function Allinvoices() {

    const [allinvoices, setallinvoices] = useState([])
    const [spinning, setSpinning] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const searchInput = useRef(null);

    const FetchMarkets = async () => {
        try {
            setSpinning(true);
            const res = await axios.get("/api/v1/invoices/get-allinvoice")
            setallinvoices(res.data["Allinvoice"].map((data) => ({
                key: data["_id"],
                marketName: data["marketname"],
                invoiceNumber: data["invNo"],
                date: data["date"],
                tax: data["tax"],
                subtotal: data["subtotal"],
                taxmeth: data["taxmeth"],
                grandtotal: ("₹") + data["grandtotal"] + (".00")
            })))
            setFilteredData(res.data["Allinvoice"].map((data) => ({
                key: data["_id"],
                marketName: data["marketname"],
                invoiceNumber: data["invNo"],
                date: data["date"],
                tax: data["tax"],
                subtotal: data["subtotal"],
                taxmeth: data["taxmeth"],
                grandtotal: ("₹") + data["grandtotal"] + (".00")
            })))
            setSpinning(false);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        FetchMarkets()
    }, [])

    const FetchInvoice = async(id)=>{
        try {
            setSpinning(true)
            const res=await axios.get(`/api/v1/invoices/get-invoice/${id}`)
            console.log(res.data["invoice"])
            setSpinning(false)
            localStorage.setItem("ExistingInvoice", JSON.stringify(res.data["invoice"]));
           
            window.open("/gen-existing-invoice", '_blank');
        } catch (error) {
            console.log(error);
        }
    }


    const handleDateFilter = (dates) => {
        if (!dates || dates.length !== 2) {
            setFilteredData(allinvoices);
            return;
        }

        let startDate = dates[0].format("YYYY.MM.DD");
        let endDate = dates[1].format("YYYY.MM.DD");

        const filteredInvoices = allinvoices.filter(invoice =>
            moment(invoice.date, "DD.MM.YYYY").isBetween(startDate, endDate, null, '[]')
        );

        setFilteredData(filteredInvoices);
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex, placeholder) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={placeholder || `Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: 'Invoice Number',
            dataIndex: 'invoiceNumber',
            key: 'invoiceNumber',
            ...getColumnSearchProps('invoiceNumber', 'Search Invoice Number'),
        },
        {
            title: 'Market Name',
            dataIndex: 'marketName',
            key: 'marketName',
            ...getColumnSearchProps('marketName', 'Search Market Name'),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',

        },
        {
            title: 'Grand Total',
            dataIndex: 'grandtotal',
            key: 'grandtotal',
        },

    ];

    return (
        <>
            <Spin spinning={spinning} fullscreen size='large' />
            <HeaderComp />
            <div>
                <div style={{ padding: '30px' }}>
                    <Space style={{ marginBottom: 5 }}>
                        <RangePicker onChange={handleDateFilter} format={"DD.MM.YYYY"} />
                    </Space>
                    <br />
                    <Table columns={columns} dataSource={filteredData}
                        expandable={{
                            expandedRowRender: (record) =>
                                <>
                                    <p style={{ margin: 0 }}>
                                        {record.taxmeth === "18%" ?
                                            <>
                                                {record.subtotal} + {record.tax}({record.taxmeth}) = {record.grandtotal}
                                                <Button onClick={() => { FetchInvoice(record.key) }}></Button>
                                            </>
                                            :
                                            <>
                                                {record.subtotal} + {record.tax}({record.taxmeth}) + {record.tax}({record.taxmeth}) = {record.grandtotal}
                                                <Button onClick={() => { FetchInvoice(record.key) }}></Button>
                                            </>
                                        }
                                    </p>
                                </>
                        }} />
                </div>
            </div>
        </>
    );
};


export default Allinvoices