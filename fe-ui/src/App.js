import React from "react";
// import main from "./pages/users/homePage/main";
import 'daisyui/dist/full.css';
import './style/homePage.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Layout from "./components/Layout";
import Detail from "./components/Detail";
import '../src/style/detail.css';

import { BrowserRouter, NavLink, Routes, Route, Navigate, Link, Switch, Outlet, Router } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Detail" element={<Detail/>}/>
        </Route>
      </Routes> 
    </BrowserRouter>
  
  )
}

export default App;
