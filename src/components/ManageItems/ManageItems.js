import React from 'react';
import { useForm } from 'react-hook-form';
import './ManageItems.css';

const ManageItems = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className='container my-5 p-3 rounded rounded'>
            <div className='w-75 mx-auto bg-light'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100 bg-warning p-5' src="https://cdn3.iconfinder.com/data/icons/web-development-66/64/z-123-512.png" alt="" />
                    </div>
                    <div className="col-md-6 bg-light p-3 text-white">
                        <h4 className='text-warning'>Upload Products</h4>


                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input defaultValue="test" {...register("example")} />

                            {/* include validation with required or other standard HTML validation rules */}
                            <input {...register("exampleRequired", { required: true })} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;