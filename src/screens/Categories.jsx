import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Categories.css'
const Categories = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [toSearch,setToSearch] = useState('');

  const searchResultApi = ()=> {
      alert(toSearch)
  }

  return (
    <div className="container-homepage">
      <NavBar />
      <h2 className='center-text'>Search for the food Ingradient wise</h2>
      <div className="r-search">
      <input
        value={toSearch}
        type="text"
        placeholder="Search..."
        onChange={(event) => setToSearch(event.target.value)} 
      />
        <button onClick={searchResultApi}>Search</button>
      </div>

      {searchResult.length > 0 ?
        <div>
          <p>a</p>
        </div> : <div style={{height : '100vh'}}>
          <p>b</p>
        </div>
     }


      <Footer />
    </div>
  )
}

export default Categories