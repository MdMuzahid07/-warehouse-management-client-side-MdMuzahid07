import React from 'react';
import './Slider.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Slider = () => {
    return (
        <div className='bg-light'>
            <Carousel>
                <div>
                    <img src="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3319&hei=2405&qlt=100,0&resMode=sharp2&size=3319,2405" />
                </div>
                <div>
                    <img src="https://www.apple.com/newsroom/images/product/mac/standard/Apple_MacBook-Pro_14-16-inch_10182021_big.jpg.slideshow-xlarge_2x.jpg"
                            alt="Second slide" />
                    {/* <p className="legend">Apple MacBook</p> */}
                </div>
                <div>
                    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Deal_sale_Lenovo_thinkpad_T14_gen_2_AMD_Ryzen_5.jpg" />
                </div>
            </Carousel>
        </div>
    );
};


export default Slider;