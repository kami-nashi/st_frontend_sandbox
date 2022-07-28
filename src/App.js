import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Home from './pages/Template';
import Terms from './pages/Terms';
import Usage from './pages/Usage';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Router>
      <span><Link to="/">Home</Link></span>
      <span><Link to="/Terms">Terms of Service </Link></span>
      <span><Link to="/Usage">Usage Agreement</Link></span>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Terms" element={<Terms />} />
      <Route path="/Usage" element={<Usage />} />
      </Routes>
      </Router>

    </div>
    
  );
}

export default App;
