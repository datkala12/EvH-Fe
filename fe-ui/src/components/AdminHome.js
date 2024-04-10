import React from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch, Outlet, Router, useLocation } from 'react-router-dom';
import ProductManager from './ProductManager';
import ContactManager from "./ContactManager";
import CategoryManager from "./CategoryManager";
import OrderManager from "./OrderManager";
import RequestManager from "./RequestManager";

function AdminHome() {
    const location = useLocation();

    return (
        <div className="flex">
            {/* Thanh bên trái */}
            <div className="sidebar border text-center bg-white text-white h-full w-64 fixed pt-20 left-0 overflow-y-auto">
                <h1 className='text-black w-full text-2xl'>Dashboard</h1>
                <ul className="p-4 border">
                    <li className={`py-2 ${location.pathname === '/admin/ProductManager' ? 'bg-blue-600' : 'hover:text-blue-500'}`}>
                        <Link to="/admin/ProductManager" className="block hover:text-blue-500 hover:scale-115">Product</Link>
                    </li>
                    <li className={`py-2 ${location.pathname === '/admin/CategoryManager' ? 'bg-blue-600' : ''}`}>
                        <Link to="/admin/CategoryManager" className="block hover:text-blue-500 hover:scale-115">Category</Link>
                    </li>
                    <li className={`py-2 ${location.pathname === '/admin/ContactManager' ? 'bg-blue-600' : ''}`}>
                        <Link to="/admin/ContactManager" className="block hover:text-blue-500 hover:scale-115">Contact</Link>
                    </li>
                    <li className={`py-2 ${location.pathname === '/admin/RequestManager' ? 'bg-blue-600' : ''}`}>
                        <Link to="/admin/RequestManager" className="block hover:text-blue-500 hover:scale-115">Request</Link>
                    </li>
                    <li className={`py-2 ${location.pathname === '/admin/OrderManager' ? 'bg-blue-600' : ''}`}>
                        <Link to="/admin/OrderManager" className="block hover:text-blue-500 hover:scale-115">Order</Link>
                    </li>
                </ul>
            </div>

            {/* Nội dung của trang */}
            <div className="ml-64 p-8 text-black">
                <h1 className="text-3xl font-bold mb-4">Summary</h1>
                <div className="flex justify-center mx-auto gap-10">
                    <div className="p-4 border w-1/4 text-center">
                        <h2 className="text-lg font-semibold mb-4">Product</h2>
                        <p>Total: 25</p>
                    </div>
                    <div className="p-4 border w-1/4 text-center">
                        <h2 className="text-lg font-semibold mb-4">Category</h2>
                        <p>Total: 5</p>
                    </div>
                    <div className="p-4 border w-1/4 text-center">
                        <h2 className="text-lg font-semibold mb-4">Contact</h2>
                        <p>Total: 9</p>
                    </div>
                    <div className="p-4 border w-1/4 text-center">
                        <h2 className="text-lg font-semibold mb-4">Request</h2>
                        <p>Total: 9</p>
                    </div>
                </div>
                <Routes>
                    <Route path="/admin/ProductManager" component={ProductManager} />
                    <Route path="/admin/CategoryManager" component={CategoryManager} />
                    <Route path="/admin/ContactManager" component={ContactManager} />
                    <Route path="/admin/RequestManager" component={RequestManager} />
                    <Route path="/admin/OrderManager" component={OrderManager} />
                </Routes>
            </div>
        </div>
    );
}

export default AdminHome;
