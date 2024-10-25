import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'
import SuperAdminDashboard from './components/Dashboards/SuperAdminDashboard'
import NotFound from './components/NotFoundPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/loadingPage' element={<LoadingPage />}></Route>
          <Route path='/superAdminDashboard' element={<SuperAdminDashboard/>}></Route>
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
