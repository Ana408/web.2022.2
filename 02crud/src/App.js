import { Routes, Route, Link } from 'react-router-dom'
import CreateTeacher from './components/Teacher/CreateTeacher';
import EditTeacher from './components/Teacher/EditTeacher';
import ListTeacher from './components/Teacher/ListTeacher';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link to={'/'} className='navbar-brand'>CRUD</Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>

            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Professor
              </a>
              <ul class="dropdown-menu">
                <li className='nav-item'>
                  <Link to='/createTeacher' className='nav-link'>Criar Professor</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/editTeacher' className='nav-link'>Editar Professor</Link>
                </li>

                <li className='nav-item'>
                  <Link to='/listTeacher' className='nav-link'>Listar Professor</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        
        <Route path='createTeacher' element={<CreateTeacher />} />
        <Route path='editTeacher/:id' element={<EditTeacher />} />
        <Route path='listTeacher' element={<ListTeacher />} />
      </Routes>
    </div>
  );
}

export default App;