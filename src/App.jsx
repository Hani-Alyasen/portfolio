import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />

      <Hero />
   <Home />
      <About />
      <Services />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
