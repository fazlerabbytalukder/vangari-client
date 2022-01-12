import React from 'react';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1F2024', marginTop: '50px', color: 'white' }}>
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{color:'#16BCDC', marginRight:'20px'}} class="fas fa-truck-moving fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{fontSize:'13px', fontWeight:'bold', textAlign:'left'}}>QUICK PICKUP</h6>
                                <p style={{fontSize:'14px', textAlign:'left', color:'#999999'}}>Any time you want.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{color:'#16BCDC', marginRight:'20px'}} class="fas fa-money-check fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{fontSize:'13px', fontWeight:'bold', textAlign:'left'}}>SAFE PAYMENT</h6>
                                <p style={{fontSize:'14px', textAlign:'left', color:'#999999'}}>If goods have problems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{color:'#16BCDC', marginRight:'20px'}} class="far fa-comments fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{fontSize:'13px', fontWeight:'bold', textAlign:'left'}}>24/7 HELP CENTER</h6>
                                <p style={{fontSize:'14px', textAlign:'left', color:'#999999'}}>24/7 Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{color:'#16BCDC', marginRight:'20px'}} class="fas fa-hand-holding-usd fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{fontSize:'13px', fontWeight:'bold', textAlign:'left'}}>RETURN MONEY</h6>
                                <p style={{fontSize:'14px', textAlign:'left', color:'#999999'}}>If Any problems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#999999' }} className="divider py-1"></div>
            {/* <hr class="bg-danger border-2 border-top border-danger"></hr> */}
        </div>
    );
};

export default Footer;