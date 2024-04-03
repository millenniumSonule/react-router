import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import Contact from './screens/Contact.jsx';
import Home from './screens/Home.jsx';
import Layout from './screens/Layout.jsx';
import NoPage from './screens/NoPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
);


