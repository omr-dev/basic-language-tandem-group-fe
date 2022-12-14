import './App.scss'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome'
import { PageLogin } from './pages/PageLogin'
import { PageLogout } from './pages/PageLogout'
import { PageMembers } from './pages/PageMembers'
import { PageRegister } from './pages/PageRegister'
import { PageConfirmLink } from './pages/PageConfirmLink'




function App() {


  return (
    <div className="App">

      <h1>Basic language tandem group fe</h1>

      <nav>
        <NavLink to='/welcome'>Welcome</NavLink>
        <NavLink to='/members'>Members</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/logout'>Logout</NavLink>
      </nav>
      <Routes>
        <Route path='/welcome' element={<PageWelcome />} />
        <Route path='/members' element={<PageMembers />} />
        <Route path='/register' element={<PageRegister />} />
        <Route path='/login' element={<PageLogin />} />
        <Route path='/logout' element={<PageLogout />} />
        <Route path='/confirm-link' element={<PageConfirmLink />} />
        <Route path='/' element={<Navigate to="/welcome" replace />} />
      </Routes>
    </div>
  )
}

export default App
