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
import YouTube from 'react-youtube';

const Home = () => {

  const [popularCategory, setPopularCategory] = useState([]);

  const [randomMeals, setRandomMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getVideoId = (youtubeLink) => {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:.*(?:v=|\/v\/)|(?:watch\/|embed\/|v\/))|youtu\.be\/)([^#\&\?]*).*/);
    return videoIdMatch ? videoIdMatch[1] : '';
  };
  

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

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      setSelectedMeal(response.data.meals[0]);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

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
            <div className="random-meal-card" key={index} onClick={() => fetchMealDetails(meal.idMeal)}>
              <img src={meal.strMealThumb} class="random-meal-card-image" alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

           {showModal && selectedMeal && (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedMeal.strMeal}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <img src={selectedMeal.strMealThumb} className="img-fluid meal-image" alt={selectedMeal.strMeal} />
                  </div>
                  <div className="col-md-6">
                    <div className="details">
                      <h6>Instructions:</h6>
                      <p>{selectedMeal.strInstructions}</p>
                      <h6>Ingredients:</h6>
                      <ul>
                        {Object.keys(selectedMeal).map((key, index) => {
                          if (key.startsWith("strIngredient") && selectedMeal[key]) {
                            return <li key={index}>{selectedMeal[key]} - {selectedMeal[`strMeasure${index + 1}`]}</li>;
                          }
                          return null;
                        })}
                      </ul>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h6>Category:</h6>
                        <p>{selectedMeal.strCategory}</p>
                      </div>
                      <div className="col">
                        <h6>Area:</h6>
                        <p>{selectedMeal.strArea}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h6>Tags:</h6>
                        <p>{selectedMeal.strTags}</p>
                      </div>
                      <div className="col">
                        <h6>YouTube Video:</h6>
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${getVideoId(selectedMeal.strYoutube)}`} allowFullScreen title="YouTube video player"></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Email form */}

      <div className="join-email-form">
        <h1>Deliciousness <br />to your inbox </h1>
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
