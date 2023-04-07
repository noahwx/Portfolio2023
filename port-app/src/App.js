import React from 'react';
import Favicon from 'react-favicon';
import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';

// VK      M.I.SSS
// Version 0.7.706

function App() {

  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // When ready, auto-scroll 1px to hide URL bar
    window.addEventListener("load", function () {
        // Set a timeout...
        setTimeout(function () {
            // Hide the address bar!
            window.scrollTo(0, 1);
        }, 0);
    });
  }

  return (
    <>
      <Favicon url={logo} />
      <Header />
      <Main />
      {/* <footer>Designed By Noah Fontenette © 2023</footer> */}
    </>
  );
}

export default App;
