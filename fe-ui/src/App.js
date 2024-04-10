import React from "react";
import 'daisyui/dist/full.css';
import './style/homePage.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Layout from "./components/Layout";
import Detail from "./components/Detail";
import '../src/style/detail.css';
import Gdetail from "./components/Gdetail";

import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch, Outlet, Router } from 'react-router-dom';
import Pay from "./components/Pay";
import Post from "./components/Post";
import Checkout from "./components/Checkout";
import ProductManager from "./components/ProductManager";
import ContactManager from "./components/ContactManager";
import OrderManager from "./components/OrderManager";
import CategoryManager from "./components/CategoryManager";
import Login from "./components/Login";
import AdminHome from "./components/AdminHome";
import RequestManager from "./components/RequestManager";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Detail/:id" element={<Detail />} />
          <Route path="Gdetail/:id" element={<Gdetail />} />
          <Route path="Pay" element={<Pay />} />
          <Route path="Post" element={<Post />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="admin/ProductManager" element={<ProductManager />} />
          <Route path="admin/ContactManager" element={<ContactManager />} />
          <Route path="admin/OrderManager" element={<OrderManager />} />
          <Route path="admin/CategoryManager" element={<CategoryManager />} />
          <Route path="admin" element={<Login />} />
          <Route path="admin/AdminHome" element={<AdminHome />} />
          <Route path="admin/RequestManager" element={<RequestManager />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
