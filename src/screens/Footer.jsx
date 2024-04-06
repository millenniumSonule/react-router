import React from 'react'
import './assets/Footer.css'
import logo from './assets/TastebiteLogo.png'; // Importing the logo image

const Footer = () => {
  return (
    <div className="footer-container">

      <div className="logo-discription">
        <div className="logo">

          <img src={logo} alt="Tastebite Logo" />
        

        </div>
        <p className='disc-footer'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptate velit iste inventore distinctio voluptatum illo reprehenderit suscipit dolorem cupiditate, expedita asperiores rerum, at dolorum! Voluptates eveniet reprehenderit mollitia eligendi dicta.
        </p>
      </div>

      <div className="links-colms">
        <div className="tastebite-col">
            <ul>
              <li style={{fontWeight:900}}>Tastebite</li>
              <li>About us </li>
              <li>Careers</li>
              <li>Feedback</li>

            </ul>
            <ul>
              <li style={{fontWeight:900}}>Legal</li>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Cookies</li>
              <li>Copyright</li>

            </ul>
            <ul>
              <li style={{fontWeight:900}}>Follow</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
        </div>

      </div>
    
    
    </div>
  )
}

export default Footer