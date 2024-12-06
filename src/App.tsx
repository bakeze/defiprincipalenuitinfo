import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CorpHumain from './CorpHumain';
import Apprendre from './Apprendre';
import Accueil from 'Accueil';
import Podcast from 'podcast'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/corphumain" element={<CorpHumain />} />
        <Route path="/apprendre" element={<Apprendre />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;
