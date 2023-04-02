import React from 'react';
import Favicon from 'react-favicon';
import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';


// Version 0.0.540

function App() {
  return (
    <>
      <Favicon url={logo} />
      <Header />
      <Main />
    </>
  );
}

export default App;
