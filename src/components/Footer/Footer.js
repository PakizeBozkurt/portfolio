import React, { useState, useEffect } from "react";

function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Pakize Bozkurt. All rights reserved.</p>
        <p>Current Time: {currentTime.toLocaleTimeString()}</p>
      </div>
    </footer>
  );
}

export default Footer;
