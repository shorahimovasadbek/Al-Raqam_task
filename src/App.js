import Card from './components/Cards/Card';
import './App.css';
import Apbar from './components/Apbar/Apbar';
import Cursor from './components/Cursor/Cursor';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home';
import massiv from './components/InfoLanguage/LangMass';

function App() {
  localStorage.setItem('massiv', JSON.stringify(massiv))
  return (
    <div className='row g-0'>
      <Cursor />
      <div className="col-2">
        <Apbar />
      </div>
      <div className="col-10">
        <Home/>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
