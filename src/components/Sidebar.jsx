import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4">
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
        <div className="flex items-center space-x-2">
          <img src="/path/to/logout-icon.png" alt="Logout" className="w-5 h-5" />
          <Link to="#" className="hover:text-gray-600">Logout</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
