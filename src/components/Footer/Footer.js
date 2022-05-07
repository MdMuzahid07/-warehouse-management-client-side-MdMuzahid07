import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className='bg-dark text-white py-5'>
                <footer className='container pt-5'>
                    <div className="">
                        <div className="row d-flex">
                            <div className='col-md-6'>
                                <ul>
                                    <h5>Products</h5>
                                    <a href=""><li>brands</li></a>
                                    <a href=""><li>Demo</li></a>
                                    <a href=""><li>Pricing</li></a>
                                    <a href=""><li>Security FAQ</li></a>
                                    <a href=""><li>Features</li></a>
                                </ul>
                                <ul>
                                    <h5>Laptop Galaxy</h5>
                                    <a href=""><li>About Us</li></a>
                                    <a href=""><li>Careers</li></a>
                                    <a href=""><li>Support</li></a>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h5>Connect with us</h5>
                                <div className="logos d-flex mb-5">
                                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/1200px-Facebook_icon_2013.svg.png" alt="" /></a>
                                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Instagram.svg/2048px-Instagram.svg.png" alt="" /></a>
                                    <a href="#"><img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="" /></a>
                                    <a href="#"><img src="https://www.svgrepo.com/show/332084/github.svg" alt="" /></a>
                                </div>

                                <h5>Stay up to date with Laptop Galaxy</h5>
                                <p>Subscribe to our newsletter today to <br /> receive updates on the latest news, releases and special offers. We respect your privacy. <br /> Your information is safe and will never be shard.</p>

                                <div className='subscribe pt-2'>
                                    <input type="text" name="email" placeholder="email" id="" />
                                    <button className='btn btn-info'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <hr />
                            <p className='text-center mt-5'>Copyright &#169; 2022 : All Right Reserved</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;