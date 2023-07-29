import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';
import "./App.css"; 
import Pages from "./pages/Pages";


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        <Pages />
      </div>
      <Footer />
    </div>
  );
}

export default App;
