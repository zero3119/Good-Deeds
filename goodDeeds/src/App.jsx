import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";




  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;

