import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Gallery from './Pages/Gallery';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
