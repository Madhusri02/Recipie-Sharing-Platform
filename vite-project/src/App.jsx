import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login.jsx'
// import Home from './components/Home.jsx'
import './App.css'
import SignupForm from './components/Signup.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignupForm />
      {/* <Login /> */}
      {/* <Home /> */}
    </>
  )
}

export default App
