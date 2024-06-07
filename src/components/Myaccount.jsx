import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Help = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Main Content */}
      <div className='flex justify-center align-center mt-14 '>
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <aside className="w-48 bg-gray-200 p-4 mt-14 lg:mt-0 ml-4 lg:ml-0 mb-4 lg:mb-0 h-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
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
              <div className="flex items-center space-x-2 mb-0">
                <img src="/path/to/logout-icon.png" alt="Logout" className="w-5 h-5" />
                <Link to="#" className="hover:text-gray-600">Logout</Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-4 mt-4 lg:mt-0 ml-4 lg:ml-16 justify-center align-center lg:w-2/3">
            <h1 className="text-2xl mb-4">Account Settings</h1>
            <h2 className="text-xl mb-2">Manage your account details</h2>
            <h3 className="text-lg mb-2">Personal detail</h3>
            <div className="flex flex-col mb-4">
              <div className="flex mb-2">
                <label htmlFor="firstName" className="w-1/2 pr-2">First Name:</label>
                <label htmlFor="lastName" className="w-1/2 pl-2">Last Name:</label>
              </div>
              <div className="flex mb-2">
                <input type="text" id="firstName" placeholder="Enter your first name" className="w-1/2 pr-2" />
                <input type="text" id="lastName" placeholder="Enter your last name" className="w-1/2 pl-2" />
              </div>
            </div>
            <h3 className="text-lg mb-2">Address</h3>
            <div className="flex flex-col mb-4">
              <div className="flex mb-2">
                <label htmlFor="addressLine1" className="w-1/2 pr-2">Address Line 1:</label>
                <label htmlFor="addressLine2" className="w-1/2 pl-2">Address Line 2:</label>
              </div>
              <div className="flex mb-2">
                <input type="text" id="addressLine1" placeholder="Lorem ipsum" className="w-1/2 pr-2" />
                <input type="text" id="addressLine2" placeholder="Lorem ipsum" className="w-1/2 pl-2" />
              </div>
              <div className="flex mb-2">
                <label htmlFor="city" className="w-1/2 pr-2">City:</label>
              </div>
              <div className="flex mb-2">
                <input type="text" id="city" placeholder="Lorem ipsum" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
