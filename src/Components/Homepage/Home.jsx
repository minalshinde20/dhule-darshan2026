import React, { useState } from "react";
import HotelBg from "../../assets/Images/homeimage.jpg";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/user";

import "../Homepage/Home.css";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toogleForm, settoogleForm] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await res.json();

    if (res.ok) {
      dispatch(login(result.data));
      navigate("/dashboard");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="main-container">

      {/* NAVBAR */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">Dhule Darshan</h1>

          <div className="nav-links">
            <a href="/hotel">Hotel</a>
            <a href="/forts">Fort</a>
            <a href="/attraction">Attractions</a>
            <a href="/food">Food</a>
            <a href="/onedaytrip">One Day Packages</a>
          </div>

          <button
            className="dashboard-btn"
            onClick={() => settoogleForm(!toogleForm)}
          >
            Dashboard
          </button>
        </nav>
      </header>

      {/* HERO */}
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${HotelBg})` }}
      >
        <h1>Welcome to Dhule Darshan</h1>
        <p>Explore Everything in One Place</p>
      </div>

      {/* ABOUT */}
      <section className="about-section">
        <h2>About Dhule</h2>
        <p>
        Dhule is one of the fastest-growing cities in Maharashtra, located in the historic Khandesh region of North Maharashtra. Situated on the banks of the Panzara River, Dhule beautifully blends rich history, cultural diversity, and modern development. Once a small village under the rule of various dynasties like the Mughals, Peshwas, and British, today it has transformed into a key industrial and commercial hub. The city enjoys a strategic advantage as it lies at the junction of major national highways, making it an important transportation and logistics center.

Dhule is well known for its agriculture-based economy, especially for milk, ghee, and groundnut production. It is also emerging as a center for textile industries, wind energy projects, and part of the ambitious Delhi-Mumbai Industrial Corridor (DMIC). The city offers a balanced lifestyle with educational institutions, healthcare facilities, and growing infrastructure.

Apart from its economic importance, Dhule is rich in tourism experiences. From historic forts like Laling, Songir, and Thalner to spiritual places, scenic viewpoints, and local attractions, the city has something for every traveler. The famous Khau Galli street food culture adds flavor to the experience with delicious local dishes like Misal Pav, Pav Bhaji, and Dabeli.

With its mix of history, culture, food, and modern growth, Dhule is not just a city—it’s an experience waiting to be explored.
        </p>
      </section>

      {/* FEATURES */}
      <section className="feature-section">

        <div className="feature-card">
          <h3>🏨 Hotels</h3>
          <p>Find best hotels and book your stay easily.</p>
          <button onClick={() => navigate("/hotel")}>Explore</button>
        </div>

        <div className="feature-card">
          <h3>🏰 Forts</h3>
          <p>Discover historic forts and heritage places.</p>
          <button onClick={() => navigate("/forts")}>Explore</button>
        </div>

        <div className="feature-card">
          <h3>🍴 Food</h3>
          <p>Enjoy famous street food and local dishes.</p>
          <button onClick={() => navigate("/food")}>Explore</button>
        </div>

        <div className="feature-card">
          <h3>📍 Attractions</h3>
          <p>Visit temples, farms and scenic locations.</p>
          <button onClick={() => navigate("/attraction")}>Explore</button>
        </div>

        <div className="feature-card">
          <h3>🚗 Packages</h3>
          <p>Book one day trips and travel packages.</p>
          <button onClick={() => navigate("/onedaytrip")}>Explore</button>
        </div>

      </section>

      {/* LOGIN */}
      {toogleForm && (
        <div className="login-overlay">
          <div className="login-container">

            <div className="login-text">
              <h1>Login Now</h1>
              <p>Access your dashboard</p>
            </div>

            <div className="login-card">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button>Login</button>
              </form>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default Home;