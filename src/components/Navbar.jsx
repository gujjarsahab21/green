import React from 'react';
import { FaUser, FaSearch, FaWifi } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" mt-11 w-full flex items-center justify-between bg-white-800 text-black p-4">
      <div className="flex items-center space-x-2">
        <button className="text-xl"><FaUser /></button>
        <span className="text-lg">Green</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
        <Link to="/shop" className="hover:text-gray-400">Shop</Link>
        <Link to="/cart" className="hover:text-gray-400">Cart</Link>
        <Link to="/offers" className="hover:text-gray-400">Offers</Link>
        <button className="text-xl"><FaSearch /></button>
      </div>
      <div className="flex items-center space-x-2">
        <FaWifi />
        <span>My Account</span>
      </div>
    </nav>
  );
};

export default Navbar;
