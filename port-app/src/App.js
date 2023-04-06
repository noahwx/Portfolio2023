import React from 'react';
import Favicon from 'react-favicon';
import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';

// VK      M.I.SSS
// Version 0.7.204

function App() {
  return (
    <>
      <Favicon url={logo} />
      <Header />
      <Main />
      <footer>Designed By Noah Fontenette © 2023</footer>
    </>
  );
}

export default App;
