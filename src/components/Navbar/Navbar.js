import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className=' bg-red-500 text-white w-full sticky top-0 shadow-2xl py-3'>
            <div className='container mx-auto md:flex justify-between items-center'>
                <p className='text-4xl text-cyan-400 font-bold md:text-start text-center border-b-2 border-t-2 border-gray-500 rounded-xl p-2 md:m-0 m-3'>TEST-SKILLS</p>
                <div className='text-center md:mt-0 mt-5 mb-2'>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/home">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/blogs">Blogs</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;