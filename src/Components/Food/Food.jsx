import React from "react";
import "./Food.css";
import { useNavigate } from "react-router-dom";

import foodImage1 from "../../assets/Images/famousfood.jpg";

function Food() {
  const navigate = useNavigate();

  return (
    <div className="food-container">

      {/* Navbar */}
      <header className="food-header">
        <nav className="food-nav">
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
      <div
        className="food-hero"
        style={{ backgroundImage: `url(${foodImage1})` }}
      >
        <div className="hero-overlay">
          <h1>
            <span>Famous</span> Food
          </h1>
          <button onClick={() => navigate("/shop")}>Explore Food</button>
        </div>
      </div>

      {/* About */}
      <section className="food-about">
        <h2>What is special in Dhule?</h2>
        <p>
          Dhule is well known for purest milk and ghee production, maximum cultivable land and
          production of groundnut, foremost in agro-based industries, leader in wind power
          generation. In the Sakri Taluka there is one of Asia's largest solar projects near
          Chhadvel Korde village.
        </p>
      </section>

  

      {/* Khau Galli */}
      <section className="street-food">
        <h2>Best Street Food in Dhule - Khau Galli</h2>

        <div className="food-grid">

          <div className="food-card">
            <h3>Pav Bhaji</h3>
            <p>A spicy, buttery mashed vegetable dish loved by everyone.</p>
          </div>

          <div className="food-card">
            <h3>Misal Pav</h3>
            <p>A quintessential Maharashtrian spicy curry topped with farsan.</p>
          </div>

          <div className="food-card">
            <h3>Pani Puri</h3>
            <p>Crispy balls filled with spicy water, potatoes, and chickpeas.</p>
          </div>

          <div className="food-card">
            <h3>Ragda Pattice</h3>
            <p>Potato patties served with spicy white pea curry.</p>
          </div>

          <div className="food-card">
            <h3>Dabeli</h3>
            <p>Sweet and spicy potato filling inside a bun.</p>
          </div>

          <div className="food-card">
            <h3>Sev Khamani</h3>
            <p>A savory snack made from crushed dhokla and spices.</p>
          </div>

          <div className="food-card">
            <h3>Bhel Puri</h3>
            <p>A crunchy mix of puffed rice, veggies, and chutneys.</p>
          </div>

          <div className="food-card">
            <h3>Sandwich & Pizza</h3>
            <p>Popular fast-food street options.</p>
          </div>

          <div className="food-card">
            <h3>Falooda</h3>
            <p>A sweet dessert drink, famous at Mateshwari.</p>
          </div>

          <div className="food-card">
            <h3>Kuka</h3>
            <p>A local specialty beverage unique to Dhule.</p>
          </div>

        </div>
      </section>

  
    </div>
  );
}

export default Food;