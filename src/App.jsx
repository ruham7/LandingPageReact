import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./index.css";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Analytics />
      </div>
    </>
  );
}

export default App;
