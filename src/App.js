import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './Components/Login&register/Login';
import Home from './Components/Homepage/Home';
import Map from './Components/Map/Map';
import Hotel from './Components/Hotel/Hotel';
import Forts from './Components/Forts/Forts';
import Attraction from './Components/Attraction/Attraction';
import Food from './Components/Food/Food'; 
import Shop from './Components/ShopPage/Shop';
import Admin from './Components/Admin/Admind';
import OneDayTrip from './Components/OneDayTrip/OneDayTrip';
import BookCar from './Components/BookCar/BookCar';
import { Provider } from 'react-redux';
import {store} from './redux/store'
import Dashboard from './Components/Dashboard/Dashboard';

// Shortcuts
// rfce : for making fuctional component and export it

const App = () => {
  return (
    <Provider store={store}>
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/hotel' element={<Hotel/>} ></Route>
              <Route path='/login' element={<Login/>} ></Route>
              <Route path='/map' element={<Map/>} ></Route>
              <Route path='/forts' element={<Forts/>} ></Route>
              <Route path='/attraction' element={<Attraction/>} ></Route>
              <Route path='/food' element={<Food/>} ></Route>
              <Route path='/admind' element={<Admin/>} ></Route>
              <Route path='/shop'element={<Shop/>}></Route>
              <Route path='/onedaytrip'element={<OneDayTrip/>}></Route>
              <Route path='/bookcar'element={<BookCar/>}></Route>
              <Route path='/dashboard'element={<Dashboard/>}></Route>
            </Routes>
        </Router>
    </div>
</Provider>
  );
};

export default App;
