import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './MyItems.css';

const MyItems = () => {

    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('https://limitless-cove-08665.herokuapp.com/product')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);


    // to delete a product form database

    const handleDeleteProduct = (id) => {

        const proceed = window.confirm('Delete a product?');

        if (proceed) {
            const url = `https://limitless-cove-08665.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    const newRemaining = products.filter(product => product._id !== id);
                    setProducts(newRemaining);
                })
        }


    }




    return (
        <div className='container my-5'>
            <h1 className='text-warning text-center my-5'>All Products</h1>
            {
                products?.map((product) => <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Price</th>
                                <th>Delete Or Add Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.name}</td>
                                <td><img src={product.picture} alt="" /></td>
                                <td>{product.price}</td>
                                <td><button onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>)
            }
        </div>
    );
};

export default MyItems;