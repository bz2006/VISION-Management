import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import Header from '../components/header'
import "./home.css"
import Chart from '../components/areaGraph';

function HomePage() {
    return (
        <>
            <Header />
            <div >
                <div className='anmain'>
                    <div className='graphdiv'>
                        <Chart/>
                    </div>
                    <div className='bottomstat'>
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