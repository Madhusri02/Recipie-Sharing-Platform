
import React, { useState } from 'react';
import axios from 'axios';
import bg from '../pics/login-bg.png'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/signup', formData);
      console.log('User registered:', response.data);
    } 
    catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  return (<div className="bg-gray-100 min-h-screen flex items-center justify-center" >
    <img src= {bg} alt="image" />
    <div className="bg-white p-8 shadow-md w-full max-w-md absolute z-10">
        <h2 className="text-2xl font-semibold mb-4">SIGNUP</h2>
    <form onSubmit={handleSubmit}>
      <label htmlFor="username" className="block text-gray-700 font-medium mb-1">Username:</label>
        <input type="text" id="username"  name="username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>

        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">Password:</label>
        <input type="password"  id="password" name="password" value={formData.password}  onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"/>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1"> Email:</label>
        <input  type="email"  id="email" name="email "  value={formData.email}  onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
      {/* Other input fields for password, confirm password, and email */}
      <button type="submit"  className="w-full bg-blue-500 text-white mt-3 py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
    </form>
    </div>
    </div>
  );
};

export default SignupForm;
