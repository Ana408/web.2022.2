import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './componets/Home';
import CreateStudent from './componets/students/CreateStudent';
import EditStudent from './componets/students/EditStudent';
import ListStudent from './componets/students/ListStudent';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to='/' className='navbar-brand' style={{ paddingLeft: 10 }}>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Estudante
              </a>
              <ul className="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/CreateStudent' className='nav-link'>Criar Estudante</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/ListStudent' className='nav-link'>Listar Estudante</Link>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='CreateStudent' element={<CreateStudent />} />
        <Route path='ListStudent' element={<ListStudent />} />
        <Route path='EditStudent' element={<EditStudent />} />
      </Routes>
    </div>
  );
}

export default App;
