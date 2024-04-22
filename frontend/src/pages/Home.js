import React from 'react'
import Header from '../components/header'
import "./home.css"

function HomePage() {
    return (
        <>
            <Header />
            <div style={{marginBottom:"50px"}}>
                <div className='andiv'>
                    <div className='angraph'>
                        <h1>Analytics</h1>
                    </div>
                    <div className='anltdiv1'>
                        <div className='anlt'>
                            <h1>1</h1>
                        </div>
                        <div className='anlt'>
                            <h1>2</h1>
                        </div>
                        <div className='anlt'>
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div className='anltdiv2'>
                    <div className='anlt2'>
                        <h1>1</h1>
                    </div>
                    <div className='anlt2'>
                        <h1>2</h1>
                    </div>
                    <div className='anlt2'>
                        <h1>3</h1>
                    </div>
                    <div className='anlt2'>
                        <h1>3</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage