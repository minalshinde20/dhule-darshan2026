import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("dash");
  const [carData, setCarData] = useState([]);
  const [hotelData, setHotelData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCarBooking();
    fetchHotelBooking();
    fetchUsers();
  }, []);

  const fetchCarBooking = async () => {
    const res = await fetch("http://localhost:5000/gcarbooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: user.payload._id }),
    });
    const data = await res.json();
    setCarData(data);
    setLoading(false);
  };

  const fetchHotelBooking = async () => {
    const res = await fetch("http://localhost:5000/gbooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: user.payload._id }),
    });
    const data = await res.json();
    setHotelData(data);
    setLoading(false);
  };

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:5000/getUsers");
    const data = await res.json();
    setUserData(data);
    setLoading(false);
  };

  const logout = () => {
    navigate("/");
  };

  // 🔥 Reusable Card
  const Card = ({ title, name, date, event, amount }) => (
    <div className="card">
      <h3>{title}</h3>
      <p><strong>By:</strong> {name}</p>
      <p>{date}</p>
      <p>{event}</p>
      <button>₹ {amount}</button>
    </div>
  );

  return (
    <div className="dashboard">

      {/* ===== SIDEBAR ===== */}
      <div className="sidebar">
        <h2>Dhule Admin</h2>

        <button onClick={() => setActiveTab("dash")}>Dashboard</button>
        <button onClick={() => setActiveTab("booking")}>Bookings</button>
        <button onClick={() => setActiveTab("users")}>Users</button>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="content">

        {activeTab === "dash" && (
          <div className="dashboard-home">
            <h1>Welcome {user?.payload?.name}</h1>
            <p>Manage bookings, users and explore Dhule services.</p>
          </div>
        )}

        {activeTab === "booking" && (
          <div className="booking-grid">

            <div>
              <h2>Hotel Bookings</h2>
              {!loading &&
                hotelData.data?.map((d, i) => (
                  <Card
                    key={i}
                    title={d.bookProp}
                    name={d.uid.name}
                    date={d.Bookingdate}
                    event={d.Eventdate}
                    amount={d.amount}
                  />
                ))}
            </div>

            <div>
              <h2>Trip Bookings</h2>
              {!loading &&
                carData.data?.map((d, i) => (
                  <Card
                    key={i}
                    title={d.carName}
                    name={d.uid.name}
                    date={d.Bookingdate}
                    event={d.Eventdate}
                    amount={d.amount}
                  />
                ))}
            </div>

          </div>
        )}

        {activeTab === "users" && (
          <div>
            <h2>Users</h2>
            <div className="user-grid">
              {!loading &&
                userData.data?.map((u, i) => (
                  <div className="user-card" key={i}>
                    <h3>{u.name}</h3>
                    <p>{u.email}</p>
                  </div>
                ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;