import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Machanic from './pages/Machanic/Machanic';
import Contact from './pages/Contact/Contact';
import Sign from './components/Tab/SignUp';
import Login from './components/Tab/Login';
import { NotFound } from './pages/RouteNoMatch';
import './App.css';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Mechanic' element={<Machanic />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Sign />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
