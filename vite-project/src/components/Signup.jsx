
import React, { useState } from 'react';
import axios from 'axios';
import bg from '../pics/login-bg.png'
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/signup',{ user_id: username, password: password, email: email })
    console.log(response) 
  };

  return (
  <div className="bg-gray-100 min-h-screen flex items-center justify-center" >
    <img src= {bg} alt="image" />
    <div className="bg-white p-8 shadow-md w-full max-w-md absolute">
        <h2 className="text-2xl font-semibold mb-4">SIGNUP</h2>
    <form >
      <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username:</label>
        <input type="text" id="username"  name="username" onChange={(e) => { setUserName(e.target.value) }} value={username} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password:</label>
        <input type="password"  id="password" name="password" onChange={(val) => { setPassword(val.target.value) }} value={password} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1"> Email:</label>
        <input  type="email"  id="email" name="email "  onChange={(val) => { setEmail(val.target.value) }} value={email} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
        <Link to="/login"> <button type="submit"  className="w-full bg-blue-500 text-white mt-3 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" onSubmit={handleSubmit}>  Sign Up</button></Link>
        or 
        <Link to="/login"> <button type="submit"  className="w-full bg-blue-500 text-white mt-3 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Login</button></Link>

    </form>
    </div>
    </div>
  );
};

export default SignupForm;
