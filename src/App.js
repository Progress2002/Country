import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/details" element={DetailsPage} />
    </Routes>
  </>
);

export default App;
