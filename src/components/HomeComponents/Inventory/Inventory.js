import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { inventoryId } = useParams();


    const [product, setProduct] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/product/${inventoryId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [product]);



    return (
        <div className='container my-5 bg-warning w-50 d-flex mx-auto rounded p-3'>
            <div className="row">
                <div className="col-6">
                    <img className='w-100 img-fluid' src={product?.picture} alt="" />
                </div>
                <div className="col-6">
                    <h4 className='text-white'>Model: {product?.name}</h4>
                    <h5 className='text-white'>Price: {product?.price}</h5>
                    <p className='text-white'>Product Description: {product?.description}</p>
                    <h5 className='text-white'>Supplier: {product?.supplier}</h5>
                    <p className='text-white'>Product Quantity:</p>
                    <div className='d-flex mt-5'>
                        <input className='border-0 w-25 rounded' type="number" name="number" placeholder="Quantity" id="" />
                        <div className='d-flex btns'>
                            <button className='inventory-btn rounded-pill ms-2'>Stock</button>
                            <button><Link to='/manageitems'>Add Product</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;