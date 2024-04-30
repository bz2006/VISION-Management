import React, { useState, useEffect } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import Header from '../components/header'
import axios from 'axios';
import "./home.css"
import Chart from '../components/areaGraph';

function HomePage() {

    const [Data, setData] = useState([])
    const [Profit, setprofit] = useState(0)
    const [invNo, setinvNo] = useState(0)

    var currentDate = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var currentMonthName = months[currentDate.getMonth()];

    const FetchAnalytics = async () => {
        try {
            const res = await axios.get("/api/v1/analytics/get-analytics")
            console.log(res.data);
            setData(res.data.map((anlyct) => ({
                month: anlyct.monthname,
                Profit: anlyct.profit,
                Invs: anlyct.noinv

            })))
            for(let i of res.data){
                if(i.monthname===currentMonthName){
                    setprofit(i.profit)
                    setinvNo(i.noinv)
                }
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {

        FetchAnalytics()

    }, [])

    return (
        <>
            <Header />
            <div >
                <div className='anmain'>
                    <div className='graphdiv'>
                        <Chart Data={Data} />
                    </div>
                    <div className='bottomstat'>
                        <div className='stat'>
                            <Card bordered={false}>
                                <Statistic
                                    title="Profit"
                                    value={"₹"+Profit+".00"}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                />
                            </Card>
                        </div>
                        <div className='stat'>
                            <Card bordered={false}>
                                <Statistic
                                    title="Invoice #"
                                    value={invNo}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                />
                            </Card>
                        </div>
                        <div className='stat'>
                            <Card bordered={false}>
                                <Statistic
                                    title="Active"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </div>
                        <div className='stat'>
                            <Card bordered={false}>
                                <Statistic
                                    title="Active"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </div>
                        <div className='stat'>
                            <Card bordered={false}>
                                <Statistic
                                    title="Active"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined />}
                                    suffix="%"
                                />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage