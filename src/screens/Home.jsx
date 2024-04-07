import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import aImage from './assets/corosalmages/a.jpg';
import bImage from './assets/corosalmages/b.jpg';
import cImage from './assets/corosalmages/c.jpg';

const Home = () => {
  return (
    <div className="container-homepage">
      <NavBar />
      <div id="carouselExample" className="carousel slide">
      <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
  </ol>
        <div className="carousel-inner">
          <div className="carousel-item active a-image">
            <img  src={aImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item a-image">
            <img src={bImage} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item a-image">
            <img src={cImage} className="d-block w-100" alt="..." />
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
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita nulla cum esse, modi blanditiis non minima libero eos quidem voluptas iste consectetur dolore. Similique eos optio sunt rem. Modi, corrupti!
      </h1>
      <Footer />
    </div>
  );
};

export default Home;
