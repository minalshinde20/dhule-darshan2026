import React from "react";
import { Card } from "react-bootstrap";
import "./BookCar.css";

import Car1 from "../../assets/Images/car1.jpg";
import Car2 from "../../assets/Images/car2.jpg";
import Car3 from "../../assets/Images/car3.jpg";
import Car4 from "../../assets/Images/car4.png";
import Car5 from "../../assets/Images/car5.png";
import Car6 from "../../assets/Images/car6.png";

function BookCar() {
  const uid = "661fd1f2e14eede28c4bb0a6";

  const BookCass = (param) => {
    fetch("http://localhost:5000/carbooking", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: uid,
        bookProp: param.bookProp,
        type: param.type,
        carName: param.carName,
        capacity: param.capacity,
        amount: param.amount,
        Eventdate: param.Eventdate,
        Bookingdate: param.Bookingdate,
      }),
    });
  };
const cars = [
  {
    img: Car1,
    name: "Amaze / Etios / Dzire",
    capacity: "4 Seater / Sedan",
    price: "₹ 2,999/-",
    data: {
      bookProp: "car",
      type: 1,
      carName: "Amaze / Etios / Dzire",
      capacity: "4",
      amount: 2999,
    },
  },
  {
    img: Car2,
    name: "Toyota Innova Crysta",
    capacity: "6 – 7 Seater / SUV",
    price: "₹ 4,499/-",
    data: {
      bookProp: "car",
      type: 2,
      carName: "Toyota Innova Crysta",
      capacity: "7",
      amount: 4499,
    },
  },
  {
    img: Car3,
    name: "Maruti Ertiga",
    capacity: "6 – 7 Seater / SUV",
    price: "₹ 3,499/-",
    data: {
      bookProp: "car",
      type: 3,
      carName: "Maruti Ertiga",
      capacity: "7",
      amount: 3499,
    },
  },
  {
    img: Car4,
    name: "Tempo / Force Traveller",
    capacity: "12 Seater / LCV",
    price: "₹ 4,999/-",
    data: {
      bookProp: "car",
      type: 4,
      carName: "Tempo Traveller",
      capacity: "12",
      amount: 4999,
    },
  },
  {
    img: Car5,
    name: "Toyota Innova",
    capacity: "7 Seater / Sedan",
    price: "₹ 3,999/-",
    data: {
      bookProp: "car",
      type: 5,
      carName: "Toyota Innova",
      capacity: "7",
      amount: 3999,
    },
  },
  {
    img: Car6,
    name: "Mini Bus",
    capacity: "21 Seater / LCV",
    price: "Price on Request",
    data: {
      bookProp: "car",
      type: 6,
      carName: "Mini Bus",
      capacity: "21",
      amount: 0,
    },
  },
];

  return (
    <div className="car-container">

      {/* Navbar */}
      <header className="car-header">
        <nav className="car-nav">
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

      {/* Title */}
      <section className="car-title">
        <h1>One Day Cab Packages</h1>
        <p>
          Select your preferred vehicle and book your comfortable journey
        </p>
      </section>

      {/* Cards */}
      <div className="car-grid">
        {cars.map((car, i) => (
          <Card className="car-card" key={i}>
            <Card.Img variant="top" src={car.img} />

            <Card.Body>
              <Card.Title>{car.name}</Card.Title>
              <Card.Text>
                {car.capacity}
                <br />
                {car.price}
              </Card.Text>

              {car.data && (
                <button
                  className="book-btn"
                  onClick={() =>
                    BookCass({
                      uid,
                      ...car.data,
                      Eventdate: "2024-06-01",
                      Bookingdate: "2024-05-01",
                    })
                  }
                >
                  Book Now
                </button>
              )}
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
}

export default BookCar;