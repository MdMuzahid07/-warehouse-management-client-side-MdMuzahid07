import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div>
            <div className='custom-banner'>
                <div className="container">
                    <div className="row">
                        <div className="col-4 col-md-6 custom-text">
                            <h1 className='text-white'>LEGION</h1>
                            <h2 className='text-white'>Stylish outside.</h2>
                            <h2 className='text-white'>Savage inside.</h2>
                            <button className='custom-btn'>DISCOVER LEGION</button>
                        </div>
                        <div className="col-8 col-md-6">
                            <div className='custom-text custom'>
                                <h1 className='text-white'>Style and savagery beyond imagining</h1>
                                <span className='border'></span>
                                <p className='text-white'>Prepare to dazzle friends and obliterate foes with Legion’s latest generation of gaming laptops. Conquer the eSports arena with the Legion 5i Pro and Legion 5 Pro, complete with the world’s first 16" WQHD+ displays on gaming laptops. Slay in style with the newly designed Legion 5i and Legion 5, packing aluminum and magnesium blended bodies. Stay tuned for more on these epic devices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;