import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import Footer from "./components/Footer";
import Trainers from "./components/Trainers";

const Layout = () => (
  <div>
    <Header />
    {/* Outlet is where nested routes will render */}
    <div className="content">
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      {/* Main Layout with Header and Footer */}
      <Route path="/" element={<Layout />}>
        {/* Default route redirects to Home */}
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="contact" element={<Contact />} />
        <Route path="journey" element={<Journey />} />
        <Route path="trainers" element={<Trainers />} />

      </Route>
    </Routes>
  );
}

export default App;
