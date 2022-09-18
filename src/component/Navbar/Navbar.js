
import React from 'react';
const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-white flex justify-around items-center shadow-md border-b-1">
          <div>
            <h1 className='text-2xl font-bold tracking-wide text-blue-500'>Employee Management System</h1>
          </div>

          <ul className='flex font-bold'>
            <li><a className='mr-4 hover:text-sky-500 text-gray-500' href='#'>Home</a></li>
            <li><a className='mr-4 hover:text-sky-500 text-gray-500' href='#'>About</a></li>
            <li><a className='mr-4 hover:text-sky-500 text-gray-500' href='#'>Employee</a></li>
          </ul>
          
        </nav>
    );
};

export default Navbar;