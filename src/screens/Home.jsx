import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import aImage from './assets/corosalmages/a.jpg';
import bImage from './assets/corosalmages/b.jpg';
import cImage from './assets/corosalmages/c.jpg';
import dImage from './assets/corosalmages/d.jpg';
import eImage from './assets/corosalmages/e.jpg';

const Home = () => {
  return (
    <div className="container-homepage">
      <NavBar />
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active a-image">
      <img src={aImage} className="d-block w-100 overlay" alt="..." />
      <div className="carousel-caption">
        <h5>Image 1</h5>
        <p>Description for Image 1</p>
      </div>
    </div>
    <div className="carousel-item a-image">
      <img src={bImage} className="d-block w-100 overlay" alt="..." />
      <div className="carousel-caption">
        <h5>Image 2</h5>
        <p>Description for Image 2</p>
      </div>
    </div>
    <div className="carousel-item a-image"> 
      <img src={cImage} className="d-block w-100 overlay" alt="..." />
      <div className="carousel-caption">
        <h5>Image 3</h5>
        <p>Description for Image 3</p>
      </div>
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
</div>

      <div className="popular-category">
        <h2>Popular Categories</h2>
        <div className="popular-category-list d-flex">
            <div className="first-category">
              <img src={aImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
            <div className="first-category">
              <img src={bImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
            <div className="first-category">
              <img src={cImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
            <div className="first-category">
              <img src={dImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
            <div className="first-category">
              <img src={eImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
            <div className="first-category">
              <img src={aImage} className="round-image" alt="..." />
              <p>Pasta</p>
            </div>
           

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
