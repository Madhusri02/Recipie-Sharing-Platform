import { useState } from 'react'
import Login from './components/Login.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import Home from './components/Home.jsx'
import '../src/App.css'
import SignupForm from './components/Signup.jsx'
import Recipie_adding from './components/AddRecipie.jsx'
import Landing from './components/Landing.jsx'
import All_Recipie from './components/Allrecipie.jsx'
import Challenges from './components/Challenges.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/login"  element={<Login />} /> 
        <Route path="/" element={<SignupForm />} /> 
        <Route path="/add-recipie" element={<Recipie_adding />} /> 
        <Route path="/landing" element={<Landing/>} /> 
        <Route path="/allrecipies" element={<All_Recipie/>} /> 
        <Route path="/contest" element={<Challenges/>} /> 
        {/* <Route path="/recipie-details" element={<Recipie_adding />} />  */}
      </Routes>
    </BrowserRouter>
    {/* <SignupForm /> */}
      {/* <Login /> */}
      {/* <Home /> */}
      {/* <Recipie_adding /> */}
    </>
  )
}

export default App
