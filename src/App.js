import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import ScrollHorizontal from "./components/ScrollHorizontal";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <ScrollHorizontal />
      <Cards/>
      <Footer />
      

    </div>
  );
}

export default App;
