// Card.js
import React from 'react';
import bg from '../pics/briyani.png'

const Card = ({ title, description , category , ingredients }) => {
  return (
    <div className="bg-amber-100 rounded-lg shadow-md p-4 border-2 h-65 w-80 ">
        <div className='col-start-1'><div>
            <img className='w-50 mb-10 ml-2' src={bg} alt="image" /></div>
            <div className='flex flex-col bg-white rounded-t-3xl rounded-b-3xl py-5 mr-10 ml-10 shadow-2xl border-2 '>
              
              <div className='flex flex-col bg-white rounded-3xl '>
                <div className='font-bold'>{title}</div>
                <div> Category :  {category}</div>
              </div>
            </div>
      {/* <img src={imageUrl} alt={title} className="w-full h-auto mb-2" />
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-lg font-semibold">{category}</p> */}
    </div>
    </div>
  );
};

export default Card;