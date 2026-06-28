import React from 'react';
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
export default function App() {
  return (
    <div>
      <h2>WELCOME TO KODNEST</h2>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}


