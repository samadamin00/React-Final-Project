import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Machanic from './pages/Machanic/Machanic';
import Contact from './pages/Contact/Contact';
import Sign from './components/Tab/SignIn';
import Login from './components/Tab/Login';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    let pageName = '';

    if (currentPath === '/Home') {
      pageName = 'Home';
    } else if (currentPath === '/About') {
      pageName = 'About';
    }

    document.body.className = pageName.toLowerCase();

    return () => {
      document.body.className = '';
    };
  }, [location]);

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
