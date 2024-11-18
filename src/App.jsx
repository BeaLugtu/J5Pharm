import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Base/Login';
import SuperAdminDashboard from './components/SuperAdminDashboard/MainDashboard';
import BranchDashboard from './components/BranchDashboard/MainDashboard';
import NotFound from './components/Base/NotFoundPage';
import LoadingPage from './components/Base/LoadingPage';
import ForgotPass from './components/Base/ForgotPass';
import ResetPasswordSuccessfully from './components/Base/ResetPasswordSuccessfully';
import EmailCodeVerify from './components/Base/EmailCodeVerify';
import CreateNewPassword from './components/Base/CreateNewPassword';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loadingPage" element={<LoadingPage />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
        <Route path="/email-Verification-Code" element={<EmailCodeVerify />} />
        <Route path="/createNewPassword" element={<CreateNewPassword />} />
        <Route path="/resetPasswordSuccessfully" element={<ResetPasswordSuccessfully />} />
        <Route path="/superAdminDashboard/*" element={<SuperAdminDashboard />} />
        <Route path="/branchDashboard/*" element={<BranchDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;