import React from 'react';
import playStore from '../../../images/google play store.webp';
import appStore from '../../../images/app store.webp';
import payment from '../../../images/payment getway.webp';

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#1F2024', marginTop: '50px', color: 'white' }}>
            <div className="container py-2">
                <div className="row">
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{ color: '#16BCDC', marginRight: '20px' }} class="fas fa-truck-moving fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{ fontSize: '13px', fontWeight: 'bold', textAlign: 'left' }}>QUICK PICKUP</h6>
                                <p style={{ fontSize: '14px', textAlign: 'left', color: '#999999' }}>Any time you want.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{ color: '#16BCDC', marginRight: '20px' }} class="fas fa-money-check fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{ fontSize: '13px', fontWeight: 'bold', textAlign: 'left' }}>SAFE PAYMENT</h6>
                                <p style={{ fontSize: '14px', textAlign: 'left', color: '#999999' }}>If goods have problems.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{ color: '#16BCDC', marginRight: '20px' }} class="far fa-comments fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{ fontSize: '13px', fontWeight: 'bold', textAlign: 'left' }}>24/7 HELP CENTER</h6>
                                <p style={{ fontSize: '14px', textAlign: 'left', color: '#999999' }}>24/7 Customer Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='d-flex justify-content-center align-items-center'>
                            <div>
                                <i style={{ color: '#16BCDC', marginRight: '20px' }} class="fas fa-hand-holding-usd fa-3x"></i>
                            </div>
                            <div className='mt-3'>
                                <h6 style={{ fontSize: '13px', fontWeight: 'bold', textAlign: 'left' }}>RETURN MONEY</h6>
                                <p style={{ fontSize: '14px', textAlign: 'left', color: '#999999' }}>If Any problems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: '#999999' }} className="divider py-1"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-5">
                        <h6>Download App</h6>
                        <p style={{ color: '#999999', fontSize: '14px' }} className='my-4'>Vangari App is now available on App Store & Google Play. <br /> Get it now.</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <img style={{ width: '170px', marginRight: '15px', cursor: 'pointer' }} src={playStore} alt="" />
                            <img style={{ width: '170px', cursor: 'pointer' }} src={appStore} alt="" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-3 mb-3'>
                            <i style={{ padding: '15px', backgroundColor: '#3C5B9B', borderRadius: '3px', marginRight: '5px' }} class="fab fa-facebook-f"></i>
                            <i style={{ padding: '15px', backgroundColor: '#40C1DF', borderRadius: '3px', marginRight: '5px' }} class="fab fa-twitter"></i>
                            <i style={{ padding: '15px', backgroundColor: '#C619B8', borderRadius: '3px', marginRight: '5px' }} class="fab fa-linkedin-in"></i>
                            <i style={{ padding: '15px', backgroundColor: '#ED3C32', borderRadius: '3px', marginRight: '5px' }} class="fab fa-instagram"></i>
                            <i style={{ padding: '15px', backgroundColor: '#EB8314', borderRadius: '3px', marginRight: '5px' }} class="fab fa-google-plus-g"></i>
                            <i style={{ padding: '15px', backgroundColor: '#C72982', borderRadius: '3px', marginRight: '5px' }} class="fab fa-whatsapp"></i>
                            <i style={{ padding: '15px', backgroundColor: '#F3A92B', borderRadius: '3px', marginRight: '5px' }} class="fab fa-behance"></i>
                        </div>
                    </div>
                    <div className="col-md-2 mt-5">
                        <h6>Help & Customer Care</h6>
                        <div className='mt-4' style={{ color: '#999999', fontSize: '14px' }}>
                            <p>New Customers</p>
                            <p>How to use My Account</p>
                            <p>Payment Methods</p>
                            <p>Problems with your Order</p>
                        </div>
                    </div>
                    <div className="col-md-2 mt-5">
                        <h6>My Account</h6>
                        <div className='mt-4' style={{ color: '#999999', fontSize: '14px' }}>
                            <p>Product Support</p>
                            <p>Checkout</p>
                            <p>Wishlist</p>
                            <p>Redeem Voucher</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h6>Sign Up To Newsletter</h6>
                        <div className='mt-4' style={{ color: '#999999', fontSize: '14px' }}>
                            <p>Join 60.000+ subscribers and get a new discount coupon <br /> on every Friday.</p>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button style={{backgroundColor:'#14A8C5'}} class="btn btn-secondary" type="button" id="button-addon2">SUBSCRIBE</button>
                        </div>
                        <p style={{ color: '#999999', fontSize: '14px' }}>By providing your email address, you agree to our Privacy Policy and Terms of Service.</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='d-flex justify-content-center flex-column align-items-center mt-3 mb-3'>
                <img src={payment} alt="" />
                <p style={{ color: '#999999', fontSize: '14px' }}>Copyright © Vangari.com. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;