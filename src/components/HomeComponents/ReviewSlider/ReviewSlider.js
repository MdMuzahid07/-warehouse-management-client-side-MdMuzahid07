import React from 'react';
import './ReviewSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ReviewSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='container my-5'>
            <h1 className='text-center text-warning'>Brands</h1>
            <div style={{ position: "relative" }}>
                <Carousel responsive={responsive}>
                    <div className='brnads-logos'>
                        <img src="https://cdn.pixabay.com/photo/2016/09/27/19/54/apple-1699197_1280.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Dell_logo.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Lenovo_Global_Corporate_Logo.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/AsusTek-black-logo.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOrgM5yfp5uTXKbn7kMKA-W5gCpb0TntHirGIfOPWSda1-VvPxyK5Y0pGX1Drydycx7Y&usqp=CAU" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://logoeps.com/wp-content/uploads/2011/08/acer-logo-vector-01.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Microsoft_Surface_logo_2015.svg/1280px-Microsoft_Surface_logo_2015.svg.png" alt="" />
                    </div>
                    <div className='brnads-logos'>
                        <img src="https://www.pngitem.com/pimgs/m/133-1336877_1-razer-logo-razer-logo-hd-hd-png.png" alt="" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default ReviewSlider;