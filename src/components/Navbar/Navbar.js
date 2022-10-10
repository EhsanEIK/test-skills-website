import React from 'react';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between items-center bg-red-500 text-white shadow-lg px-20 py-5'>
            <p className='text-4xl md:text-start text-center'>TEST-SKILLS</p>
            <div className='text-center md:mt-0 mt-5'>
                <a className='text-lg mr-8 hover:text-lime-500' href="/home">Home</a>
                <a className='text-lg mr-8 hover:text-lime-500' href="/statistics">Statistics</a>
                <a className='text-lg mr-8 hover:text-lime-500' href="/blogs">Blogs</a>
            </div>
        </nav>
    );
};

export default Navbar;