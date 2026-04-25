import React from "react";
import "./Attraction.css";

import ImageOne from '../../assets/Images/DhuleMandirMurtiPratishtha_001.jpg'
import ImageTwo from '../../assets/Images/chandak.png'
import ImageThree from '../../assets/Images/mahadev.jpg'
import ImageFour from '../../assets/Images/view.png'
import ImageFive from '../../assets/Images/ganpati.jpg'
import ImageSix from '../../assets/Images/rajwadi.jpg'
import ImageSeven from '../../assets/Images/Gurudwara-Temple.png'
import video from '../../assets/Images/Y2meta.app-Dhule Maharashtra _Dhule district Maharashtra _ Dhule jila-(1080p).mp4'

function Attraction() {
  return (
    <div className="attraction-container">

      {/* Navbar */}
      <header className="attraction-header">
        <nav className="attraction-nav">
          <h1 className="logo">Dhule Darshan</h1>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/hotel">Hotel</a>
            <a href="/forts">Fort</a>
            <a href="/attraction">Attractions</a>
            <a href="/food">Food</a>
             <a href="/onedaytrip">One Day Package</a>
          </div>
        </nav>
      </header>


      {/* Video */}
    <div className="video-section">
  <video autoPlay muted loop playsInline>
    <source src={video} type="video/mp4" />
  </video>
</div>

      {/* Sections */}
      <div className="section-container">

        {/* Section 1 */}
        <div className="place-card">
          <h1>Swami Narayan Temple</h1>
          <img src={ImageOne} alt="Swami Narayan Temple" />
          <p>
            The Mandir is open to the public daily throughout the year...
          </p>
          <a href="https://www.google.com/maps/search/?api=1&query=BAPS%20Shri%20Swaminarayan%20Mandir">
            SwamiNarayan Temple
          </a>
        </div>

        {/* Section 2 */}
        <div className="place-card">
          <h1>Chandal Farm</h1>
          <img src={ImageTwo} alt="Chandal Farm" />
          <p>
            Timings Mon - Fri 8:30 am - 5:30 pm...
          </p>
          <a href="https://www.justdial.com/Dhule/Chandal-Farm-Gondur">
            Chandak Organic Farm and Agro
          </a>
        </div>

        {/* Section 3 */}
        <div className="place-card">
          <h1>Panzreshwar mahadev temple</h1>
          <img src={ImageThree} alt="Mahadev Temple" />
          <p>
            Beautiful pic of our Neelkant Lord Shiva Statue...
          </p>
          <a href="https://www.google.com/maps/dir/...">
            Panzreshwar mahadev temple
          </a>
        </div>

        {/* Section 4 */}
        <div className="place-card">
          <h1>Dhule City View Point</h1>
          <img src={ImageFour} alt="View Point" />
          <p>
            Address: WQRH+29Q, Oswal Nagar, Dhule, Maharashtra
          </p>
          <a href="https://www.google.com/maps/dir/...">
            Dhule City View Point
          </a>
        </div>

        {/* Section 5 */}
        <div className="place-card">
          <h1>Shree Siddheshwar Ganesh Mandir</h1>
          <img src={ImageFive} alt="Ganesh Mandir" />
          <p>
            Nice place to pray and relax...
          </p>
          <a href="https://www.google.com/maps/dir/...">
            Shree Siddheshwar Ganesh Mandir
          </a>
        </div>

        {/* Section 6 */}
        <div className="place-card">
          <h1>History V.K. Rajwade Research Board</h1>
          <img src={ImageSix} alt="Rajwade" />
          <p>
            Dhule Of Dhule's City Center History...
          </p>
          <a href="https://www.google.com/maps/search/...">
            History V.K. Rajwade Research Board
          </a>
        </div>

        {/* Section 7 */}
        <div className="place-card">
          <h1>Gurudwara Guru Nanak Sahib Ji Dhulia</h1>
          <img src={ImageSeven} alt="Gurudwara" />
          <p>
            The Sikh place of worship is called a Gurudwara...
          </p>
          <a href="https://www.google.com/maps/place/...">
            Gurudwara Guru Nanak Sahib Ji
          </a>
        </div>

      </div>

    </div>
  );
}

export default Attraction;