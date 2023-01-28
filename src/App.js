import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Particles from "react-tsparticles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    //Call Functions
    <>
      <Particles
        className="particles-snow"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
