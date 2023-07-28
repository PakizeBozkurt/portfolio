import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import "./App.css"; 


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        {/*  Main content */}
      </div>
        <Footer />
    
    </div>
  );
}

export default App;
