import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home';
import { Login } from './Pages/Login';
import { Dashboard } from './Pages/Dashboard';
import ProtectedRoute from './middlewares/ProtectedRoute';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route index element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='dashboard' element={
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
              }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
