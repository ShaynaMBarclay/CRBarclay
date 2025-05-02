import React from 'react'
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <div className = "page-container">
      <Navbar/>
      <ScrollToTop />
      <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path= "/" element={<HomePage />} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;