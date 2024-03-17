import React from 'react';
import landingback from '../pics/landingback.png';
import chef from '../pics/logo.png';
import twitter from '../pics/twitter.png';
import facebook from '../pics/facebook.png';
import insta from '../pics/insta.png';
import youtube from '../pics/youtube.png';
import menubar from '../pics/bar-icon.png';
import menu from '../pics/overview.png';
import heart from '../pics/fav.png';
import cup from '../pics/chal.png';
import spoon from '../pics/spoon.png';
import settings from '../pics/setting.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="relative overflow-hidden bg-amber-100">  
    
    <div>
       <div className='absolute left-5 mt-4 '><img className='w-8' src={menubar} alt="" /></div>
           <div className='absolute left-10 ml-5 font-semibold mt-5 '>Cook_Share</div>
       <div className='absolute left-6  top-20'><img className='w-10' src={menu} alt="" /></div>
        <Link to="/landing" >  <div className='absolute top-20 left-20 font-semibold mt-2 '>Overview</div> </Link>
       <div className='absolute left-5 top-32'><img className='w-12' src={spoon} alt="" /></div>

       <Link to="/recipie-details" >  <div className='absolute left-20 font-semibold top-32  mt-2'>Recipes</div> </Link>
       <Link to="/allrecipies" >  <div className='absolute left-20 font-semibold top-32  mt-2'>Recipes</div> </Link>       
       
       <div className='absolute left-7 top-44 mt-2'><img className='w-9 mt-2' src={settings} alt="" /></div>
          <Link to='/add-recipie'> <div className='absolute left-17 font-semibold top-44 ml-20 mt-3'>Create <br /> Recipie</div>  </Link> 
          <div className='absolute left-7  top-56 mt-4'><img className='w-11 h-10' src={cup} alt="" /></div>
       <Link to='/contest'>  <div className='absolute left-20 font-semibold top-56 ml-1 mt-7'>Contest</div></Link>  
       </div>

<div className='ml-40'>
       <img
        className="brightness-90 absolute left-1"
        src={landingback}
        alt="Avatar"
        class="object-cover w-full h-full"
      />


      <div className="absolute font-normal text-6xl top-44 pl-10 pt-10 text-black tracking-wide">
        Eating is a necessity,
      </div>
      <div className="absolute font-normal text-6xl top-60 pl-10 pt-16 text-black tracking-wide">
         sharing is an art
      </div>
     
      <img 
        className="absolute w-20 top-10 left-9 ml-40"
        src={chef}
        alt=""
      />
       
      <div className="absolute text-xs top-11 text-slate-300 left-32 font-bold ml-40">
        COOK
      </div>
      <div className="absolute text-xs top-16 text-slate-300 left-36 font-bold pt-2 ml-40">
        SHARE
      </div>
      <div className="absolute text-xs top-24 text-slate-300 left-40 font-bold ml-40">
        CONNECT
      </div>
      <div className="absolute top-44 left-3/4 flex flex-col items-center justify-center pt-20 ml-40">
        <img
          className="w-12"
          src={twitter}
          alt=""
        />
        <img
          className="w-20"
          src={facebook}
          alt=""
        />
        <img
          className="w-10"
          src={insta}
          alt=""
        />
        <img
          className="w-10"
          src={youtube}
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default Landing;