import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LearnCards from './components/LearnMore/LearnCards';
import Card from './components/Cards/Card'
import Quiz_test from './components/Quiz/Quiz_test';
import Active from './components/Active/Active';
import Completed from './components/Completed/Completed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index  element = {<Card/>}/>
          <Route path='/LearnMore' element={<LearnCards />} />
          <Route path='/active' element={<Active />} />
          <Route path='/completed' element={<Completed />} />
          <Route path='/Quiz_Test/:word' element = {<Quiz_test/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
