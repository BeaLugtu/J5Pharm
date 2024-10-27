import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'
import NotFound from './components/NotFoundPage'
import ForgotPass from './components/ForgotPass'
import RequestSubmitted from './components/RequestSubmitted'
import SuperAdminDashboard from './components/DashboardContent/Dashboards/SuperAdminDashboard'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/loadingPage' element={<LoadingPage />}></Route>
          <Route path='/forgotPass' element={<ForgotPass />}></Route>
          <Route path='/requestSubmitted' element={<RequestSubmitted />}></Route>
          <Route path='/superAdminDashboard' element={<SuperAdminDashboard/>}></Route>
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
