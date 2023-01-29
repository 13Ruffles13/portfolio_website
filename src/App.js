import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    //Call Functions
    <>
      <Navbar />
      <Header />
      <ContactInfo />
    </>
  );
}

export default App;
