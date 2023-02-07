import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/details" element={DetailsPage} />
      </Routes>
    </>
  );
}

export default App;
