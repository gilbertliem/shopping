import React from "react";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Body from "../src/Components/Body/Body.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";
import style from "./App.module.css";

// ---------- //

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
