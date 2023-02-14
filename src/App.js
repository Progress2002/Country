import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './Components/DetailsPage';
import HomePage from './Components/HomePage';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  </>
);

export default App;
