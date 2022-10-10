import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='md:flex justify-between items-center bg-red-500 text-white shadow-lg px-20 py-5'>
            <p className='text-4xl md:text-start text-center'>TEST-SKILLS</p>
            <div className='text-center md:mt-0 mt-5'>
                <Link className='text-lg mr-8 hover:text-lime-500' to="/home">Home</Link>
                <Link className='text-lg mr-8 hover:text-lime-500' to="/statistics">Statistics</Link>
                <Link className='text-lg mr-8 hover:text-lime-500' to="/blogs">Blogs</Link>
            </div>
        </nav>
    );
};

export default Navbar;