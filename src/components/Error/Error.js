import React from 'react';

const Error = () => {
    return (
        <div className='bg-slate-500 rounded-lg flex justify-center items-center md:m-48 m-10 mt-20 p-14'>
            <div className='text-center'>
                <p className='md:text-5xl text-3xl text-rose-500 font-bold'>ERROR 404 FOUND!!</p>
                <p className='text-lg text-white mt-5'>You are in the wrong route!</p>
            </div>
        </div>
    );
};

export default Error;