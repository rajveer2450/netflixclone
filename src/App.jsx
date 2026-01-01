import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';
import MovieDetails from './pages/MovieDetails';
import './App.css';
const API_KEY = '28cf011b483c183c7864627c779979e1'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Browse apiKey={API_KEY} />} />
          <Route path="/movie/:id" element={<MovieDetails apiKey={API_KEY} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;