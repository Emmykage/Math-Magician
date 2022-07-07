// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quotes" element={<Quotes />} />
    </Routes>

  </>

);

export default App;
