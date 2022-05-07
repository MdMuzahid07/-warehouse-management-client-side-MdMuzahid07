import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='bg-light text-center py-5 mb-5'>
            <span>
                <h1 className='text-black'>SUBSCRIBE TO GET UPDATES FROM US:</h1>
                <input className='input p-5 rounded py-2 border-0 px-5' type="email" placeholder='ENTER YOUR E-MAIL ADDRESS' />
                <button className='button'>Subscribe</button>
            </span>
        </div>
    );
};

export default Subscribe;