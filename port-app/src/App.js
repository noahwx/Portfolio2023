import React from 'react';
import Favicon from 'react-favicon';
import screenfull from 'screenfull';
import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';

// VK      M.I.SSS
// Version 0.7.700

function App() {

  const element = document.getElementById('target');

  document.getElementById('button').addEventListener('click', () => {
    if (screenfull.isEnabled) {
      screenfull.request(element, {navigationUI: 'hide'});
    }
  });

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
