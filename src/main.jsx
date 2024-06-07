import React from "react";
import './index.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./components/Help.jsx";
import Navbar from './components/Navbar.jsx'

import Sidebar from "./components/Sidebar.jsx";
import MyAccount from './components/Myaccount.jsx'
import Page2 from './components/Snowbtn.jsx'
import Page1 from './components/Page1.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Page1 />} />
      <Route path="/help" element={<Help />} />
      <Route path="/myaccount" element={<MyAccount />} />
      <Route path="/page2" element={<Page2 />} />

        <Route path="/nav" element={<Navbar />} />
        <Route path="/side" element={<Sidebar />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);