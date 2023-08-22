import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './pages/signin/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
