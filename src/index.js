import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import Contact from './screens/Contact.jsx';
import Home from './screens/Home.jsx';
import NoPage from './screens/NoPage.jsx';
import Footer from './screens/Footer.jsx';
import Profile from './screens/Profile.jsx';
import Categories from './screens/Categories.jsx'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        {/* Baisc Routing */}
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element= {<Contact/>}/>
        <Route path='/Categories' element= {<Categories/>}/>
        <Route path='*' element= {<NoPage/>}/>
        
        {/* Nested Routing */}
        <Route path='/account'>
          <Route path='profile/:userId' element={<Profile/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
);


