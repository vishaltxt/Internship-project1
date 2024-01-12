import React from 'react';
import Login from './components/login';
import Homepage from './components/homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Termsofuse from './components/termsofuse';
import Privacy from './components/privacypolicy';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/termsofuse" element={<Termsofuse />} />
        <Route path="/privacypolicy" element={<Privacy />} />
      </Routes>
    </Router>
  );
};

export default App;
