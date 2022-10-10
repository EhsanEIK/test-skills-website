import React from 'react';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='border-2 rounded-lg p-3'>
            <img className='h-60 w-full bg-black' src={logo} alt={name} />
            <h1 className='text-3xl font-bold mt-3'>{name}</h1>
            <div className='flex justify-between mt-7 mb-5'>
                <p className='text-lg'>Total Quiz: <span className='font-bold'>{total}</span></p>
                <button className='bg-rose-600 rounded-md w-2/5 px-3 py-1 hover:bg-rose-700'>
                    <p className='text-white'>Details</p>
                </button>
            </div>
        </div>
    );
};

export default Topic;