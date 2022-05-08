import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './ManageItems.css';

const ManageItems = () => {

    return (
        <div className='container my-5 p-3 rounded rounded'>
            <div className='w-75 mx-auto bg-light'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='w-100 bg-warning p-5' src="https://cdn3.iconfinder.com/data/icons/web-development-66/64/z-123-512.png" alt="" />
                    </div>
                    <div className="col-md-6 bg-light p-3 text-white">
                        <h4 className='text-warning'>Upload Products</h4>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;