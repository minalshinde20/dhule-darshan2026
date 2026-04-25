import React from "react";
import { Card } from "react-bootstrap";
import "./Shop.css";

import shop1 from "../../assets/Images/Indianfood.jpg";
import Logo from "../../assets/Images/foodimage.jpg";

function Shop() {
  return (
    <div className="shop-container">

      {/* Navbar */}
      <header className="shop-header">
        <nav className="shop-nav">
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
      <div className="shop-hero">
        <img src={shop1} alt="Street Food" />
        <div className="hero-text">
          <h1>Street Food</h1>
          <h3>Popular street food in Dhule</h3>
        </div>
      </div>

      {/* Intro */}
      <section className="shop-intro">
        <h3>What is the special food of Dhule?</h3>
        <p>
          From mouthwatering Vada Pav, Misal Pav, and Poha to delectable Sabudana Khichadi and Puran Poli, Dhule offers an extensive range of traditional Maharashtrian delights.
          But that's not all! Dhule also embraces culinary influences from neighboring regions.
          If you're a fan of spicy food, do try the fiery Kolhapuri cuisine.
        </p>
      </section>

      {/* Cards */}
      <div className="shop-card-container">

        {[
          {
            title: "Avasar Namkeen",
            text: "Csn1602, Gali 6, Dhule Locality, dhule ho, Dhule - 424001 (Near Renuka Mandap)\nTimings: Mon - Sun, 2:30 pm - 9:15 pm"
          },
          {
            title: "M K Dabeli Corner",
            text: "Home 76, Dasara Ground, Railway Station Road, Dhule - 424004\nTimings: Mon - Sun, 4:00 pm - 11:00 pm"
          },
          {
            title: "Swaraj Street Food",
            text: "Opposite Hanuman Mandir, Sakri Road, Dhule\nTimings: 3:00 pm - 10:00 pm"
          },
          {
            title: "Sonu Sandwich And Fastfood",
            text: "Lane Num 1, Dhule - 424001 (Opposite Of Post Office)\n4:00 pm - 10:00 pm"
          },
          {
            title: "Sonu Sandwich And Fastfood",
            text: "Lane Num 1, Dhule - 424001 (Opposite Of Post Office)\n4:00 pm - 10:00 pm"
          },
          {
            title: "Misal Theka",
            text: "Jai Hind College Rd, Deopur, Dhule\nOpen ⋅ Closes 6 pm"
          },
          {
            title: "Sheetal Fast Food",
            text: "Krishna Kamal Complex, Sakri Rd, Dhule\nCloses 10:30 pm"
          },
          {
            title: "Mumbai Street Food Court",
            text: "Vinayak Plaza, Lane No.04, Dhule\n5:00 pm - 10:00 pm"
          }
        ].map((item, i) => (
          <Card className="shop-card" key={i}>
            <Card.Img variant="top" src={shop1} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}

      </div>


      {/* Footer */}
      <footer className="shop-footer">
        <p>
          Minal Shinde © 2024 DhuleDarshan | Design: MS
        </p>
      </footer>

    </div>
  );
}

export default Shop;