import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className=' bg-red-500 text-white w-full sticky top-0 shadow-2xl md:h-full h-40 py-3'>
            <div onClick={() => setOpen(!open)} className="md:hidden ml-5 h-7 w-7 text-white">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>
            <div className='container mx-auto md:flex justify-between items-center'>
                <Link to="/home">
                    <p className='md:text-4xl text-cyan-400 font-bold md:text-start text-center border-b-2 border-t-2 border-gray-500 rounded-xl p-2 md:m-0 m-3'>TEST-SKILLS</p>
                </Link>
                <div className={`text-center md:block md:mt-0 mt-5 mb-2 md:w-auto w-full md:static absolute duration-500 ease-in-out ${open ? 'top-24' : '-top-96'}`}>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/home">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'bg-blue-500 rounded-md text-lg px-2 py-1 mr-5 hover:text-green-300' : 'text-lg px-2 py-1 mr-5 hover:text-green-300'} to="/blogs">Blogs</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;