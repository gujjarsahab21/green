    import React from 'react';
    import { Link } from 'react-router-dom';
    import Navbar from './Navbar';

    const Page2 = () => {
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
        
        <a href="/myaccount"><span>My Account</span></a>
      </div>
    </nav>

        {/* Main Content */}
        <div className="flex flex-col items-center mt-8">
            {/* Heading */}
            <h1 className="text-8xl text-green-600 mb-4">Greenwave Ecology</h1>

            {/* Image with surrounding text */}
            <div className="flex items-center justify-center">
            <p className="mr-4">Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
            <img src="https://s3-alpha-sig.figma.com/img/4737/c52b/6efbe9e105a7a7551839578188e043d9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWHpeSHlcfTJ5BjxuYhqBDTqAwJlwrQYxWadx5hoHvl-xZ4~4NY4v1FKzNBID3SKp8WIE30LVz4CeeWhTX4V61jxvbBmZqLAA7-pGA2fY16~M4KuJ~7Q4ZuUurNT7H1qTKdHGTkiD8fAk--QwJLXxbTtLqtMfwZZAP~7jR-NbY7OW-E89VcyvsjDGU0CbPce4DuZfywA4iLVEP6EQaJ645SMPXnRcURNLhRpfoyEFhhvq-9G5V2PqtS0uc3lVR6RP3ThNZxIXxnKHuOdYMb~cqhUIThX5VN2Obm2uixXj4zAVidGjRJCp6wVgVnNXpQcfNkiiz4C~G6ohEFm4~Wj2A__" alt="Greenwave Ecology" className="w-64 h-64" />
            <p className="ml-4">Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
            </div>

            {/* Footer */}
            <div className="flex  justify-start mt-4 w-64 ">
            {/* Left Section */}
            <div>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded-md mt-4">
                Go Green
                <img src="/path/to/arrow.png" alt="Arrow" className="w-4 h-4 ml-2" />
                </button>
            </div>

            {/* Right Section */}
            <div className="border border-gray-300 rounded-xl p-4 flex flex-col">
                <img src="" alt="Icon 1" className="w-6 h-6" />
                <img src="/path/to/icon2.png" alt="Icon 2" className="w-6 h-6 mt-4" />
                <img src="/path/to/icon3.png" alt="Icon 3" className="w-6 h-6 mt-4" />
                <img src="/path/to/icon4.png" alt="Icon 4" className="w-6 h-6 mt-4" />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default Page2;
