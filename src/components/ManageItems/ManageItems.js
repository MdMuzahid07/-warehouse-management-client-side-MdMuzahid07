import React from 'react';
import { useForm } from 'react-hook-form';
import './ManageItems.css';

const ManageItems = () => {






    const handleOnSubmit = event => {

        event.preventDefault();

        const name = event.target.name.value;
        const description = event.target.description.value;
        const picture = event.target.picture.value;
        const price = event.target.picture.value;
        const supplier = event.target.supplier.value;

        const data = {name, description, picture, price, supplier};



        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(product => {

            })

    };


    return (
        <div className='container my-5 p-3 rounded rounded'>
            <div className='w-75 mx-auto bg-dark'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100 bg-warning p-5' src="https://cdn3.iconfinder.com/data/icons/web-development-66/64/z-123-512.png" alt="" />
                    </div>
                    <div className="col-md-6 bg-dark p-3 text-white">
                        <h4 className='text-warning  mt-3'>Upload Products</h4>
                        <form className='d-flex flex-column' onSubmit={handleOnSubmit}>
                            <input className='border-0 p-1 my-2 rounded' type="text" name='name' placeholder="product-name" id="" required />
                            <input className='border-0 p-1 mb-2 rounded' type="text" name='description' placeholder="product-description" id="" required />
                            <input className='border-0 p-1 mb-2 rounded' type="text" name='picture' placeholder="product-picture" id="" required />
                            <input className='border-0 p-1 mb-2 rounded' type="number" name='price' placeholder="product-price" id="" required />
                            <input className='border-0 p-1 mb-2 rounded' type="text" name='supplier' placeholder="product-supplier" id="" required />

                            <button className='button border-0 rounded' type='submit'>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;