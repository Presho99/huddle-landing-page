import React from "react"
import './App.css';
import Header from "./components/Header";
import LandingOne from "./components/LandingOne";
import LandingTwo from "./components/LandingTwo";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <Header/>
     <LandingOne/>
     <LandingTwo/>
     <Footer/>
    </div>
  );
}

export default App;
