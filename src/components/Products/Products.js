import React, { useEffect, useState } from 'react';
import './Products.css';
import AllProducts from '../HomeComponents/AllProducts/AllProducts';
import Slider from '../HomeComponents/Slider/Slider';

const Products = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/product')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-8">
                    <div className="custom-card text-center">
                        {
                            products?.map((product) => <AllProducts key={product._id} product={product} />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="custom-slider">
                        <Slider></Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;