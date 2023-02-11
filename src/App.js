import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './Components/DetailsPage';
import HomePage from './Components/HomePage';

const App = () => (
  <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
