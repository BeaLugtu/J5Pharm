import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingPage from './components/LoadingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/loading' element={<LoadingPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
