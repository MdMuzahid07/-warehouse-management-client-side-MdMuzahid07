import React from 'react';
import './AllProducts.css';

const AllProducts = ({product}) => {

    const { name, _id, picture, description, price } = product;

    return (
        <div>
            <div className="custom-css card">
                <img src={picture} alt="product-img" />
                <hr />
                <p>Brand: {name}</p>
                <p>{description}</p>
                <p>Price:$ {price}</p>
                <button className='btn btn-warning'>Update</button>
            </div>
        </div>
    );
};

export default AllProducts;