import React, { useState } from 'react';
import bg from '../pics/login-bg.png'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

const Login = () => {
  
  var [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error , setError] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username & !password){
      setError({...error, username: "Required fields" , password :"enter field value"  })
  }
  else if (!username){
    setError({...error, username: "Required fields" })
  }
  else if (!password){
    setError({...error, password: "Required fields" })
  }
   else{ 
    const response = await axios.get('http://localhost:5000/login')
    const result = response.data
    const fetched_data = result.find((u) => u.user_id === username)
    console.log("123")
    if(fetched_data === undefined ){
      console.log('not found')
      setError({...error ,up : "required fields" })
      return ;

    }
    else{
      const l = result.find((u) => u.user_id === username)
      console.log("fetched details : " + l)
      console.log(' found !')
      setError({...error , down : 'Invalid credentials. Please try again.'});
      // return;
    }
  }
    // console.log(user)
    // // const pass = result.find((u) => u.password === password);
    // if (!user || user.password !== password) {
      
    //   setError('Invalid credentials. Please try again.');
    //   return;
    // }

    // console.log(response) 
  };
  


  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center ">
        <img src= {bg} alt="image" />
      <div className="bg-white p-8 shadow-md w-full max-w-md absolute z-10">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        {error.up && <div className="error"> Enter details correctly  </div> }

       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1" >
              Enter your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              onChange={(e) => { setUserName(e.target.value) }} value={username}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
             {error.username && <div className="error"> Enter name correctly  </div> }
          </div>
          <div className="mb-4">
            {/* <img src="" alt="" /> */}
            <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
              Enter your password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              onChange={(val) => { setPassword(val.target.value) }} value={password}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
             {error.password && <div className="error"> enter password correctly  </div> }
          </div>
          {error.down && <div className="error-down"> login successfull !  </div> }
          <Link to='/landing'>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" >
            Login in  </button>  </Link>
        </form>
      </div>
    </div>
  );
};

export default Login ;