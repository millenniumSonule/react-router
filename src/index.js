import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import Contact from './screens/Contact.jsx';
import Home from './screens/Home.jsx';
import NoPage from './screens/NoPage.jsx';
import Footer from './screens/Footer.jsx';
import Profile from './screens/Profile.jsx';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element= {<Contact/>}/>

        <Route path='/account'>
          <Route path='profile/:userId' element={<Profile/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
);


