import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Help = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className=" mt-11 w-full flex items-center justify-between bg-white-800 text-black p-4">
      <div className="flex items-center space-x-2">
        <button className="text-xl"></button>
        <span className="text-lg">Green</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/about-us" className="hover:text-gray-400">About Us</Link>
        <Link to="/shop" className="hover:text-gray-400">Shop</Link>
        <Link to="/cart" className="hover:text-gray-400">Cart</Link>
        <Link to="/offers" className="hover:text-gray-400">Offers</Link>
        <button className="text-xl"></button>
      </div>
      <div className="flex items-center space-x-2">
        
        <span>My Account</span>
      </div>
    </nav>

      {/* Main Content */}
      <div className='flex justify-center align-center mt-24'>
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-48 bg-gray-200 p-4 mt-14 lg:mt-0 ml-4 lg:ml-0 mb-8 lg:mb-0 h-auto">
            <div className="space-y-6 h-auto">
              <div className="flex items-center space-x-2 ">
                <img src="/path/to/account-settings-icon.png" alt="Account Settings" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">Account Settings</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/path/to/my-orders-icon.png" alt="My Orders" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">My Orders</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/path/to/rewards-icon.png" alt="Rewards" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">Rewards</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/path/to/transaction-icon.png" alt="Transaction" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">Transaction</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/path/to/help-icon.png" alt="Help" className="w-5 h-5" />
                <Link to="/help" className="hover:text-gray-600">Help</Link>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/path/to/logout-icon.png" alt="Logout" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">Logout</Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-4 mt-4 lg:mt-0 ml-4 lg:ml-16 justify-center align-center lg:w-2/3">
            <h1 className="text-2xl mb-4 ">Select your Query</h1>
            <div className="flex flex-col">
              {/* Column 1 */}
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" defaultChecked /> Query 1
              </label>
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" /> Query 2
              </label>
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" /> Query 3
              </label>
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" /> Query 4
              </label>
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" /> Query 5
              </label>
              <label style={{ marginBottom: '1rem' }}>
                <input type="checkbox" /> Query 6
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
