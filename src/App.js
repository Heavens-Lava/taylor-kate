// import Link using react-router-dom
import React from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Routes>
        {/* create path page for homepage */}
        <Route index element={<Home />} />
        <Route path="./home" element={<Home />} />
        {/* <Route path="/about us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
