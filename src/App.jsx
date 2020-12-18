import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Body from "./Components/Body/Body.jsx";
import Footer from "./Components/Footer/Footer.jsx";
// import style from "./App.module.css";

// ---------- //

export default function App() {
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
