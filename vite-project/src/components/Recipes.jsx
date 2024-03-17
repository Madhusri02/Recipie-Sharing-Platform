import React from 'react';
import cooking from '../pics/cooking.png';
import search from '../pics/search.png';
import briyani from '../pics/briyani.png';
import menubar from '../pics/menubar.png';
import menu from '../pics/menu.png';
import heart from '../pics/heart.png';
import cup from '../pics/cup.png';
import spoon from '../pics/spoon.png';
import settings from '../pics/settings.png';
import cook from '../pics/cook.png';


const All_Recipie = () => {
  return (
    <div className='relative bg-amber-100 pl-60 rounded-r-3xl'>

      <div>
       <div className='absolute left-7 mt-4'><img className='w-8 bri' src={menubar} alt="" /></div>
           <div className='absolute left-20 font-semibold mt-5 '>Cook_Share_Connect</div>
       <div className='absolute left-10  top-20'><img className='w-10' src={menu} alt="" /></div>
           <div className='absolute top-20 left-20 font-semibold ml-3 mt-2 '>Overview</div>
       <div className='absolute left-9 top-32'><img className='w-12' src={spoon} alt="" /></div>
            <div className='absolute left-20 font-semibold top-32 ml-3 mt-3'>Recipes</div>
       <div className='absolute left-11 top-44'><img className='w-11' src={heart} alt="" /></div>
            <div className='absolute left-20 font-semibold top-44 ml-3 mt-3'>Favorite</div>
       <div className='absolute left-12  top-56'><img className='w-10 h-8 mt-2' src={settings} alt="" /></div>
            <div className='absolute left-20 font-semibold top-56 ml-3 mt-3'>Create Recipe</div> 
       <div className='absolute left-11 top-64 mt-3 '><img className='w-12 h-10 mt-3' src={cup} alt="" /></div>
             <div className='absolute left-20 font-semibold top-64 mt-8 ml-3'>Contest</div>  
       </div>

       <div className='absolute left-20 top-96 bg-black mt-10 rounded-full'><img className='w-20' src={cook} alt="" /></div>



      <div className='bg-white h-screen'>
        <div className="relative text-2xl bg-red-600 py-3 ml-40 rounded-full text-center">
          Briyani is not just food,<br></br> it's an emotion.
        </div>
        <div><img className='absolute size-20 h-30 w-80 top-0 right-10' src={cooking} alt="" /></div>
        <div className='flex flex-row gap-3 ml-28 mt-20 mb-30 '>
          <div className='relative bg-slate-300 px-20 py-2 rounded-3xl'>Explore...🫣
            <div className='absolute top-2 left-7'><img className='w-7' src={search} alt="sea" /></div>
          </div>
          <div className='bg-slate-300 px-20 py-2 rounded-3xl'>Filter</div>
        </div>

        <div className='grid grid-cols-3 mt-20'>
          <div className='col-start-1'>
            <div className='flex flex-col bg-white rounded-t-3xl rounded-b-3xl py-5 mr-10 ml-10 shadow-2xl border-2 mt-10'>
              <div><img className='w-40 ml-10' src={briyani} alt="" /></div>
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
        </div>
      </div>
    </div>
  );
};

export default All_Recipie;