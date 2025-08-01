import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import './assets/css/style.scss';
import Services from './components/frontend/Services';
import Projects from './components/frontend/Projects';
import Blogs from './components/frontend/Blogs';
import Contact from './components/frontend/Contact';
import Login from './components/backend/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/backend/Dashboard';
import RequireAuth from './components/common/RequireAuth';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Routes>

          {/* регистрация что по маршруту '/' будет отвечать элемент Home.jsx. Не забывать смотреть чтобы указывался import */}
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin/login' element={<Login/>} />


          <Route path='/admin/dashboard' element={
            <RequireAuth>
              <Dashboard/>
            </RequireAuth>
            
            } />


        </Routes>

      </BrowserRouter>
      <ToastContainer
        position='top-center'
      />

    </>
  )
}

export default App
