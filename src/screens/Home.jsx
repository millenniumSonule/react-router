import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
const Home = () => {

  const [popularCategory, setPopularCategory] = useState([]);

  const [randomMeals, setRandomMeals] = useState([]);

  const fetchRandomMeals = async () => {
    try {
      const uniqueMeals = [];
      while (uniqueMeals.length < 8) {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const meal = response.data.meals[0];
        const isDuplicate = uniqueMeals.some((m) => m.idMeal === meal.idMeal);
        if (!isDuplicate) {
          uniqueMeals.push(meal);
        }
      }
      setRandomMeals(uniqueMeals);
    } catch (error) {
      console.error('Error fetching random meals:', error);
    }
  }

  const fetchPopularCategory = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setPopularCategory(response.data.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchPopularCategory();
    fetchRandomMeals();
  }, []);

  return (
    <div className="container-homepage">
      <NavBar />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active a-image">
            <img src={aImage} className="d-block w-100 overlay" alt="..." />
            <div className="carousel-caption">
              <h5>Get Meals Info</h5>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium?</p>
            </div>
          </div>
          <div className="carousel-item a-image">
            <img src={dImage} className="d-block w-100 overlay" alt="..." />
            <div className="carousel-caption">
              <h5>Lorem ipsum dolor sit.</h5>
              <p>Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="carousel-item a-image">
            <img src={eImage} className="d-block w-100 overlay" alt="..." />
            <div className="carousel-caption">
              <h5>Lorem, ipsum.</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
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
          <ul className='d-flex popular-category-list'>
            {popularCategory.map(category => (
              <li key={category.idCategory}>
                <div className="first-category">
                  <div className="center-content">
                    <img src={category.strCategoryThumb} className="category-image" alt="..." />
                    <p className="category-name">{category.strCategory}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>


      <div class="supar-delicious">
  <h2>Trending Now</h2>
  <div class="random-meals d-flex">
    {randomMeals.map((meal, index) => (
      <div class="random-meal-card" key={index}>
        <img src={meal.strMealThumb} class="random-meal-card-image" alt={meal.strMeal} />
        <h3>{meal.strMeal}</h3>
      </div>
    ))}
  </div>
</div>

      <div className="join-email-form">
          <h1>Deliciousness <br/>to your inbox </h1>
          <h4>Enjoy Weekly Handpick Recipes and</h4>
          <h4>recommendations</h4>
          <div className="email-box">
          <div className="email-input-box">
                <input type="text" placeholder="Email address" />
                <button>Join</button>
            </div>
          </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
