import React from 'react';
import menubar from '../pics/bar-icon.png';
import menu from '../pics/overview.png';
import heart from '../pics/fav.png';
import cup from '../pics/chal.png';
import spoon from '../pics/spoon.png';
import settings from '../pics/setting.png';
import contest from '../pics/contest.png'
import { Link } from 'react-router-dom';


const Challenges = () => {
  return (
    
<div className="relative grid grid-cols-4  gap-5 ">
      <div className="relative bg-yellow-100 h-screen rounded-r-3xl " style={{ width: '80%' }}>
      
      
      <div>
       <div className='absolute left-5 mt-4 '><img className='w-8 ' src={menubar} alt="" /></div>
           <div className='absolute left-10 ml-5 font-semibold mt-5 '>Cook_Share</div>
       <div className='absolute left-10  top-20'><img className='w-10' src={menu} alt="" /></div>
           <div className='absolute top-20 left-20 font-semibold ml-3 mt-2 '>Overview</div>
       <div className='absolute left-9 top-32'><img className='w-12' src={spoon} alt="" /></div>
            <div className='absolute left-20 font-semibold top-32 ml-3 mt-3'>Recipes</div>
       <div className='absolute left-11 top-44'><img className='w-11' src={heart} alt="" /></div>
            <div className='absolute left-20 font-semibold top-44 ml-3 mt-3'>Favorites</div>
       <div className='absolute left-12  top-56 mt-1'><img className='w-9 mt-1' src={settings} alt="" /></div>
            <div className='absolute left-20 font-semibold top-56 ml-3 mt-2'>Create Recipe</div> 
       <div className='absolute left-10 top-64 mt-5'><img className='w-14 h-11' src={cup} alt="" /></div>
             <div className='absolute left-20 font-semibold top-64 mt-6 ml-4'>Contest</div>  
       </div>
      
  </div>

  
   <div className='col-start-2 col-span-3 mt-10'>
    <div className='font-medium text-4xl text-center '> Let the culinary adventures begin! </div>
   </div>
   
   <div className='absolute top-40 mt-7 left-80 text-2xl '>
   Upcoming contests 
   </div>
     
   <div className='absolute col-start-2 col-span-2 top-40 mt-20'>
      <img className='m-6 w-60 h-60 border-2 rounded-3xl' src={contest} alt="" />
      <div>The Grandchef 1</div>
   </div>
   
  </div>
  );
};
  export default Challenges;