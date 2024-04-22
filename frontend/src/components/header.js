import React from 'react';
import { Layout } from 'antd';
import "./header.css"
const { Header } = Layout;


const HeaderComp = () => {
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: "black"
                }}
            >
                <div className='imgdiv'>
                    <img style={{ width: "50%" }} src='https://static.wixstatic.com/media/c1ec53_3ff24b6f338749c3abbc5b0bc2ae6317~mv2.webp/v1/fill/w_375,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/LOGOw-min.webp' alt='' />
                </div>
            </Header>
        </Layout>
    );
};
export default HeaderComp;