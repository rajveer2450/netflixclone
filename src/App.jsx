import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './pages/Browse';
import MovieDetails from './pages/MovieDetails';
import './App.css';
const API_KEY = '28cf011b483c183c7864627c779979e1';

function App() {

  const [querys, setQuerys] = useState('');
  return (
    <Router basename="/netflixclone">
      <div className="app-container container">
        <header className="site-header">
          <div>
            <div className="site-title">netflixclone</div>
            <div className="site-subtitle muted">find movies by searching</div>
          </div>
          <div className="controls">
            <input 
                    className="search-input"
                    placeholder="Search for a movie"
                    onChange={(e) => setQuerys(e.target.value)}
                  />
            <button className="btn">Filters</button>
            <button className="btn btn-primary">Action</button>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Browse apiKey={API_KEY} query={querys} />} />
            <Route path="/movie/:id" element={<MovieDetails apiKey={API_KEY} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;