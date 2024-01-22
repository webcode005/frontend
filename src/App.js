import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>


      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <div className="container-fluid">
            <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to={"/"} className='nav-link'>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/create"} className='nav-link'>Create</Link>
                  </li>
            </ul>
      </div>
      </nav>

      <div className='container'>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create' element={<Create/>} />
              <Route path='/edit/:id' element={<Edit/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
