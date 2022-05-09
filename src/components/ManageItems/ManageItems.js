import React from 'react';
import { useForm } from 'react-hook-form';
import './ManageItems.css';

const ManageItems = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data[0])
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-100 mb-2 rounded p-1' placeholder='product name' {...register("name", { required: true})} />
                            <input className='w-100 mb-2 rounded p-1' type="number" placeholder='product price' {...register("price" ,{ required: true})} />
                            <input className='w-100 mb-2 rounded p-1' placeholder='image url' {...register("picture", { required: true})} />
                            <input className='w-100 mb-2 rounded p-1' placeholder='description' {...register("description", { required: true})} />
                            <input className='w-100 mb-2 rounded p-1' placeholder='supplier' {...register("supplier", )} />
                            <input className='w-100 mb-2 rounded p-1' value="submit" type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;