import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const GreenwaveEcology = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center mt-8">
        {/* Heading */}
        <h1 className="text-8xl  mb-4 text-green-500">Greenwave Ecology</h1>

        {/* Image with surrounding text */}
        <div className="flex items-center justify-center">
          <p className="mr-4">Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
          <img src="https://s3-alpha-sig.figma.com/img/4737/c52b/6efbe9e105a7a7551839578188e043d9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DWHpeSHlcfTJ5BjxuYhqBDTqAwJlwrQYxWadx5hoHvl-xZ4~4NY4v1FKzNBID3SKp8WIE30LVz4CeeWhTX4V61jxvbBmZqLAA7-pGA2fY16~M4KuJ~7Q4ZuUurNT7H1qTKdHGTkiD8fAk--QwJLXxbTtLqtMfwZZAP~7jR-NbY7OW-E89VcyvsjDGU0CbPce4DuZfywA4iLVEP6EQaJ645SMPXnRcURNLhRpfoyEFhhvq-9G5V2PqtS0uc3lVR6RP3ThNZxIXxnKHuOdYMb~cqhUIThX5VN2Obm2uixXj4zAVidGjRJCp6wVgVnNXpQcfNkiiz4C~G6ohEFm4~Wj2A__" alt="Greenwave Ecology" className="w-64 h-64" />
          <p className="ml-4">Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center mt-8">
          {/* Left Section */}
          <div className="mr-auto">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded-full mt-4">
              Go Green
            </button>
          </div>

          {/* Right Section */}
          <div className="border border-gray-300 rounded-full p-4 bg-green-800">
           <a href="/page2"> <h1 className='text-white'>*</h1>
           </a></div>
        </div>
      </div>
    </div>
  );
};

export default GreenwaveEcology;
