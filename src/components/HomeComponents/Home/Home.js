import React from 'react';
import Products from '../../Products/Products';
import HomeBanner from '../HomeBanner/HomeBanner';
import ReviewSlider from '../ReviewSlider/ReviewSlider';
import Subscribe from '../Subscribe/Subscribe';
import './Home.css';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <hr className='container' />
            <ReviewSlider></ReviewSlider>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;