import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
      <div className="container-homepage">
        <NavBar/>
        <h1>Homepage</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores maiores quos rerum, a magnam quae mollitia deserunt similique, voluptate nam quod, enim quaerat repellat nobis libero aut fugit inventore totam!</p>
        <Footer/>
      </div>
  )
}

export default Home