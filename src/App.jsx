import { useState } from 'react'
import './App.css'
import Login from './components/Base/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingPage from './components/Base/LoadingPage'
import NotFound from './components/Base/NotFoundPage'
import ForgotPass from './components/Base/ForgotPass'
import ResetPasswordSuccessfully from './components/Base/ResetPasswordSuccessfully'
import SuperAdminDashboard from './components/SuperAdminDashboard/MainDashboard'
import BranchDashboard from './components/BranchDashboard/MainDashboard'
import EmailCodeVerify from './components/Base/EmailCodeVerify'
import CreateNewPassword from './components/Base/CreateNewPassword'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/loadingPage' element={<LoadingPage />}></Route>
          <Route path='/forgotPass' element={<ForgotPass />}></Route>
          <Route path='/email-Verification-Code' element={<EmailCodeVerify />}></Route>
          <Route path='/createNewPassword' element={<CreateNewPassword />}></Route>
          <Route path='/resetPasswordSuccessfully' element={<ResetPasswordSuccessfully />}></Route>
          <Route path='/superAdminDashboard' element={<SuperAdminDashboard/>}></Route>
          <Route path='/branchDashboard' element={<BranchDashboard/>}></Route>
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
