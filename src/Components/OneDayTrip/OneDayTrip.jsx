import React from "react";
import "./OneDayTrip.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import dhule from "../../assets/Images/dhule1day.jpg";
import Trip1 from "../../assets/Images/ShirdiBabaTemple.jpg";
import Trip2 from "../../assets/Images/jalgoan.jpeg";
import Trip3 from "../../assets/Images/nashik.jpeg";
import Trip4 from "../../assets/Images/sambhajinager.jpeg";

function OneDayTrip() {
  const navigate = useNavigate();

  return (
    <div className="trip-page">

      {/* Navbar */}
      <header className="trip-header">
        <nav className="trip-nav">
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
      <section className="trip-hero">
        <img src={dhule} alt="Dhule Trip" />
    
      </section>

      {/* Title */}
      <div className="trip-title">
        <h2>One Day Tour In Dhule City</h2>
      </div>

      {/* Cards */}
      <div className="trip-container">

        {[{
          img: Trip1,
          title: "Dhule To Shirdi",
          text: "Dedicated to the legendary spiritual saint Shri Sai Baba...",
          link: "https://www.google.com/maps/dir/Dhule,+Maharashtra/Shirdi,+Maharashtra/"
        },
        {
          img: Trip2,
          title: "Dhule To Jalgaon",
          text: "The city's strategic placement in a fertile region...",
          link: "https://www.makemytrip.com/tripideas/places/jalgaon"
        },
        {
          img: Trip3,
          title: "Dhule To Nashik",
          text: "Wine Capital of India with beautiful vineyards...",
        },
        {
          img: Trip4,
          title: "Dhule To Sambhaji Nagar",
          text: "Ajanta Caves are one of the famous tourist spots...",
        }].map((trip, i) => (

          <Card className="trip-card" key={i}>
            {trip.link ? (
              <a href={trip.link}>
                <Card.Img variant="top" src={trip.img} />
              </a>
            ) : (
              <Card.Img variant="top" src={trip.img} />
            )}

            <Card.Body>
              <Card.Title>{trip.title}</Card.Title>
              <Card.Text>{trip.text}</Card.Text>

              <button
                className="book-btn"
                onClick={() => navigate("/bookcar")}
              >
                Book Car
              </button>
            </Card.Body>
          </Card>

        ))}

      </div>

    </div>
  );
}

export default OneDayTrip;