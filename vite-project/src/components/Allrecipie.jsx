import React, { useState , useEffect } from 'react';
import cooking from '../pics/cooking.png';
import search from '../pics/search.png';
import briyani from '../pics/briyani.png';
import menubar from '../pics/bar-icon.png';
import menu from '../pics/overview.png';
import heart from '../pics/fav.png';
import cup from '../pics/chal.png';
import spoon from '../pics/spoon.png';
import settings from '../pics/setting.png';
import cook from '../pics/logo.png';
import axios from 'axios';
import Card from './Card.jsx';

import { Link } from 'react-router-dom';


const All_Recipie = () => {
    

    const [data , setData] = useState([])

    useEffect(() => {
        // Fetch data from your API or database
       let a =  axios.get('http://localhost:5000/recipie-details') .then((response) => {
          setData(response.data);
          console.log(a) // Assuming the response contains an array of objects
        });
      }, []);

      const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (input) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setData(filtered);
    setSearchTerm(input);
  };
     
  return (
    <div className='relative bg-amber-100 pl-60 rounded-r-3xl'>

      <div>
       <div className='absolute left-7 mt-4'><img className='w-8 bri' src={menubar} alt="" /></div>
           <div className='absolute left-20 font-semibold mt-5 '>Cook_Share</div>
       <div className='absolute left-10  top-20'><img className='w-10' src={menu} alt="" /></div>
       <Link to="/landing" >  <div className='absolute top-20 left-20 font-semibold ml-3 mt-2 '>Overview</div></Link>
       <div className='absolute left-9 top-32'><img className='w-12' src={spoon} alt="" /></div>
       <Link to="/allrecipies" >     <div className='absolute left-20 font-semibold top-32 ml-3 mt-3'>Recipes</div></Link>
       <div className='absolute left-11 top-44'><img className='w-11' src={settings} alt="" /></div>
       <Link to='/add-recipie'>    <div className='absolute left-20 font-semibold top-44 ml-3 mt-3'>Create Recipie</div> </Link>
       <div className='absolute left-12  top-56'><img className='w-10 h-12 mt-1 ml-0' src={cup} alt="" /></div>
       <Link to='/contest'>     <div className='absolute left-20 font-semibold top-56 ml-3 mt-3'>Contest</div>  </Link>
       </div>

       <div className='absolute left-20 top-96 bg-black mt-10 rounded-full'><img className='w-20' src={cook} alt="" /></div>



      <div className='bg-white h-screen'>
        <div className="relative text-2xl w-50 bg-red-600 px-10 py-2 ml-40 rounded-full text-center text-left ">
          Briyani is not just food,<br></br> it's an emotion.
        </div>
        <div><img className='absolute size-20 h-30 w-80 top-0 right-10 left-120' src={cooking} alt="" /></div>
        <div className='flex flex-row gap-3 ml-28 mt-20 mb-30 '>
          <div >
            <input type="text" className='relative bg-slate-300 px-20 py-2 rounded-3xl'  onChange={(e) => handleSearch(e.target.value)} placeholder='Filter...'/>
            <img className='absolute top-40 mt-2 w-7 left-96' src={search} alt="sea" />
          </div>
        </div>
       
       {/* <div className="bg-white rounded-lg shadow-md p-4">
              <img src={imageUrl} alt={title} className="w-full h-auto mb-2" />
              <p className="text-lg font-semibold">{title}</p>
         </div> */}

         <div>
         <div className="grid grid-cols-3 gap-4 p-4">
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.description} category = {item.category} ingredients = {item.ingredients} />
      ))}
    </div>
         </div>

        {/* <div className='grid grid-cols-3 mt-20'>
          <div className='col-start-1'>
            <div className='flex flex-col bg-white rounded-t-3xl rounded-b-3xl py-5 mr-10 ml-10 shadow-2xl border-2 mt-10'>
            //   <div><img className='w-40 ml-10' src={briyani} alt="" /></div>
              <div className='flex flex-col bg-white rounded-3xl'>
                <div className='font-bold'>Biriyani</div>
                <div>A classic south Indian dish</div>
              </div>
            </div>
          </div>
          <div className='col-start-2 '>
            <div className='flex flex-col bg-white rounded-t-3xl rounded-b-3xl py-5 mr-10 ml-10 shadow-2xl border-2 mt-10'>
              <div><img className='w-40 ml-10' src={briyani} alt="" /></div>
              <div className='flex flex-col bg-white rounded-3xl'>
                <div className='font-bold'>Biriyani</div>
                <div>A classic south Indian dish</div>
              </div>
            </div>
          </div>
          <div className='col-start-3'>
            <div className='flex flex-col bg-white rounded-t-3xl rounded-b-3xl py-5 mr-10 ml-10 shadow-2xl border-2 mt-10'>
              <div><img className='w-40 ml-10' src={briyani} alt="" /></div>
              <div className='flex flex-col bg-white rounded-3xl'>
                <div className='font-bold'>Biriyani</div>
                <div>A classic south Indian dish</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default All_Recipie;