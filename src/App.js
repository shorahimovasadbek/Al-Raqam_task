// import { useEffect, useState } from 'react';
// import massiv from './components/InfoLanguage/LangMass';
import './App.css';
import Apbar from './components/Apbar/Apbar';
import Cursor from './components/Cursor/Cursor';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='row g-0'>
      <Cursor />
      <div className="col-1">
        <Apbar />
      </div>
      <div className="col-11">
        <Home />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
