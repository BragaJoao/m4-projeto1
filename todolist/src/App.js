import { useState, useEffect } from 'react';
import { getAllTasks } from './Services/Server';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </BrowserRouter>
   
    
  );
}

export default App;
