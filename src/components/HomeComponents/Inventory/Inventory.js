import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import './Inventory.css';

const Inventory = () => {

    const { inventoryId } = useParams();

    const [quantity, setQuantity] = useState(false);


    const [product, setProduct] = useState();

    useEffect(() => {
        const url = `https://limitless-cove-08665.herokuapp.com/product/${inventoryId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [product]);



    // to update info 
    const { register, handleSubmit } = useForm();

    const onSubmit = update => {

        setQuantity(true)

        console.log(update)

        const url = `https://limitless-cove-08665.herokuapp.com/product/${inventoryId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })

    };



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
                    <p className='text-white'>Product Quantity:{product?.quantity}</p>
                    <div className='d-flex mt-5'>

                        <form className='d-flex align-items-center' onSubmit={handleSubmit(onSubmit)}>
                            <input className='p-1 quantity-input' type='number' placeholder='quantity' {...register("quantity",)} />
                            <input className='w-100 mb-2 rounded p-1 input' value="Stock Update" type="submit" />
                        </form>

                        <div className=' d-flex btns'>
                            <button><Link  className='text-white' to='/manageitems'>Add Product</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;