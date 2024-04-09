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
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchRandomMeals = async () => {
    try {
      const uniqueMeals = [];
      while (uniqueMeals.length < 6) {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        const meal = response.data.meals[0];
        const isDuplicate = uniqueMeals.some((m) => m.idMeal === meal.idMeal);
        if (!isDuplicate) {
          uniqueMeals.push(meal);
        }
      }
      setRandomMeals(uniqueMeals);
      setLoading(false); // Set loading to false after data is fetched
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


      <div className="supar-delicious">
        <h2>Supar Delicious</h2>
        <div className="random-meals d-flex">
          {/* Random meal cards */}
          {randomMeals.map((meal, index) => (
            <div className="random-meal-card" key={index}>
              <img src={meal.strMealThumb} className="random-meal-card-image" alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
