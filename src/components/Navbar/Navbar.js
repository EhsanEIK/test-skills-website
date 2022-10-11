import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' bg-red-500 text-white shadow-2xl py-5'>
            <div className='container mx-auto md:flex justify-between items-center'>
                <p className='text-4xl md:text-start text-center'>TEST-SKILLS</p>
                <div className='text-center md:mt-0 mt-5 mb-2'>
                    <Link className='text-lg mr-8 hover:text-lime-500' to="/home">Home</Link>
                    <Link className='text-lg mr-8 hover:text-lime-500' to="/statistics">Statistics</Link>
                    <Link className='text-lg mr-8 hover:text-lime-500' to="/blogs">Blogs</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;