import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './Categories.css';
import axios from 'axios';
import noResultImf from './assets/noResultImg.png'

const Categories = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [toSearch, setToSearch] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [initialSearch, setInitialSearch] = useState(false); // Track initial search

  const getVideoId = (youtubeLink) => {
    const videoIdMatch = youtubeLink.match(/(?:youtu\.be\/|youtube\.com\/(?:.*(?:v=|\/v\/)|(?:watch\/|embed\/|v\/))|youtu\.be\/)([^#\&\?]*).*/);
    return videoIdMatch ? videoIdMatch[1] : '';
  };


  const searchResultApi = async (a) => {
    try {
      // Make multiple requests concurrently using Promise.all
      const [ingredientResponse, areaResponse, categoryResponse] = await Promise.all([
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${a}`),
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a}`),
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${a}`)
      ]);
  
      // Extract the meals array from each response
      const ingredientMeals = ingredientResponse.data.meals || [];
      const areaMeals = areaResponse.data.meals || [];
      const categoryMeals = categoryResponse.data.meals || [];
  
      // Combine the meals from all responses
      const combinedMeals = [...ingredientMeals, ...areaMeals, ...categoryMeals];
  
      // Set the combined search result
      setSearchResult(combinedMeals);
      setInitialSearch(true); // Set initial search to true
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


  
  return (
    <div className="container-homepage">
      <NavBar />
      <h2 className='center-text' style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold', color: '#333' , marginTop: '20px'}}>
  Find Recipes by Ingredient, Name or Area
</h2>
      <div className="r-search">
        <input
          value={toSearch}
          type="text"
          placeholder="Search..."
          onChange={(event) => setToSearch(event.target.value)}
        />
        {/* Pass a function reference to onClick */}
        <button onClick={() => searchResultApi(toSearch)}>Search</button>
      </div>

      {initialSearch ? (
        searchResult.length > 0 ? (
          <div class="random-meals d-flex p-align">
            {searchResult.map((meal, index) => (
              <div className="random-meal-card" key={index} onClick={() => fetchMealDetails(meal.idMeal)}>
                <img src={meal.strMealThumb} className="random-meal-card-image" alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-result-found">
              <img src={noResultImf} alt="no result image" />
          
          </div>
        )
      ) : (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p>Perform a search to see results</p>
        </div>
      )}



      {showModal && selectedMeal && (
  <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{selectedMeal.strMeal}</h5>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${getVideoId(selectedMeal.strYoutube)}`}
                  allowFullScreen
                  title="YouTube video player"
                  style={{ width: '100%', height: '400px' }}
                ></iframe>
              </div>
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
      <Footer />
    </div>
  );
}

export default Categories;
