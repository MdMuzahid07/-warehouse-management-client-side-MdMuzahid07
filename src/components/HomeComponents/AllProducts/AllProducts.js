import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = ({ product }) => {
    const { name, _id, picture, description, price } = product;

    const navigate = useNavigate();

    const navigateToManageInventory = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div>
            <div className="custom-css card">
                <img className='img-fluid w-100' src={picture} alt="product-img" />
                <hr />
                <p>Brand: {name}</p>
                <p>{description}</p>
                <p>Price:$ {price}</p>
                <button className='btn btn-warning' onClick={() => navigateToManageInventory(_id)}>Update</button>
            </div>
        </div>
    );
};

export default AllProducts;