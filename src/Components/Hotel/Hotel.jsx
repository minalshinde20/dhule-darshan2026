import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHotel,
  faUtensils,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import hotelImage1 from "../../assets/Images/swarnasparsh.jpeg";
import hotelImage2 from "../../assets/Images/ganpati palace.jpg";
import hotelImage3 from "../../assets/Images/image3.jpg";
import hotelImage4 from "../../assets/Images/Picture4.jpg";
import hotelImage5 from "../../assets/Images/Picture5.png";
import hotelImage6 from "../../assets/Images/picture6.jpg";
import hotelImage7 from "../../assets/Images/Picture7.jpg";
import hotelImage8 from "../../assets/Images/Picture8.png";

import HotelBg from "../../assets/Images/khadeeja-yasser-msFZE7d9KB4-unsplash.jpg";
import "../Hotel/Hotel.css";

function Hotel() {
  const uid = "661fd1f2e14eede28c4bb0a6";

  const BookHotel = (param) => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then(() => toast.success("Hotel booked successfully"))
      .catch(() => toast.error("Failed to book hotel"));
  };

  const hotels = [
    hotelImage1, hotelImage2, hotelImage3, hotelImage4,
    hotelImage5, hotelImage6, hotelImage7, hotelImage8
  ];

  return (
    <div className="hotel-container">
      <ToastContainer />

      {/* Navbar */}
      <header className="hotel-header">
        <nav className="hotel-nav">
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

      {/* Hero */}
      <section
        className="hotel-hero"
        style={{ backgroundImage: `url(${HotelBg})` }}
      >
        <div className="hero-overlay">
          <h2>The art of meeting your highest expectations</h2>
          <h1><span>Enjoy</span> Your Stay</h1>
        </div>
      </section>

      {/* History */}
      <section className="hotel-history">
        <h2>About Dhule</h2>
        <p>
          Dhule is a vibrant city in Maharashtra known for its culture,
          heritage, and hospitality. Visitors enjoy peaceful stays,
          delicious food, and beautiful places.
        </p>
      </section>

      {/* Restaurant */}
      <section className="hotel-services">
        <div className="service-card">
          <FontAwesomeIcon icon={faUtensils} />
          <h3>Family Restaurant</h3>
          <p>Enhancing life around great food.</p>
        </div>
      </section>

      {/* Hotel Grid */}
      <section className="hotel-grid">
        {hotels.map((img, i) => (
          <div className="hotel-card" key={i}>
            <img src={img} alt="hotel" />

            <div className="hotel-card-content">
              <h3>Hotel {i + 1}</h3>
              <p>Check-in: 12:00 PM</p>
              <p>Check-out: 10:00 AM</p>

              <button
                className="book-btn"
                onClick={() =>
                  BookHotel({
                    uid,
                    bookProp: "hotel",
                    type: 0,
                    amount: 5000,
                    Eventdate: "2024-06-01",
                    Bookingdate: "2024-05-01",
                  })
                }
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="hotel-contact">
        <div className="contact-box">
          <FontAwesomeIcon icon={faHotel} />
          <h3>Location</h3>
          <p>Dhule, Maharashtra</p>
        </div>

        <div className="contact-box">
          <FontAwesomeIcon icon={faPhone} />
          <h3>Phone</h3>
          <p>9897486755</p>
        </div>

        <div className="contact-box">
          <FontAwesomeIcon icon={faEnvelope} />
          <h3>Email</h3>
          <p>dhuledarshan@2001.com</p>
        </div>
      </section>

    
    </div>
  );
}

export default Hotel;