// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';
import axios from 'axios';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <CountriesList />
        <div className="row">
          <Routes>
            <Route path="/:alpha3Code" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>

    // ...
  );
}
export default App;
