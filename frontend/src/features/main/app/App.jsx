import React from 'react';
import { Routes, Route } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Category from '../../Category/Category.jsx';
// import Categories from '../../Category/Categories';
import './App.css';
import MainPage from '../MainPage';
import Navbar from '../navbar/Navbar';
import PlacePage from '../../placePage/PlacePage';
import Registration from '../registration/Registration';
import Login from '../login/Login';
// eslint-disable-next-line import/extensions
import Profile from '../../profile/Profile.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/places/:id" element={<PlacePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
