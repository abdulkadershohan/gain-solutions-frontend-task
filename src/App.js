import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import ImageGallery from './components/imageGallery/ImageGallery';


function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageGallery" element={<ImageGallery />} />
      </Routes>

    </Router>


  );
}

export default App;
