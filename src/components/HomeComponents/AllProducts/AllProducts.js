import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = ({ product }) => {
    const { name, _id, picture, description, price } = product;

    const navigate = useNavigate();

    const navigateToManageProduct = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div>
            <div className="custom-css card">
                <img src={picture} alt="product-img" />
                <hr />
                <p>Brand: {name}</p>
                <p>{description}</p>
                <p>Price:$ {price}</p>
                <button className='btn btn-warning' onClick={() => navigateToManageProduct(_id)}>Update</button>
            </div>
        </div>
    );
};

export default AllProducts;