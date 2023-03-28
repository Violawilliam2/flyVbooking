import React from 'react';
import {AiFillStar} from "react-icons/ai"

function Hotel() {
  return (
    <div className='hotel justify-center items-center' id='Hotel'>
        <div className="text-center py-8 text-white">
            <h3 className='text-xl'>Week in Juba</h3>
            <h1 className='text-2xl font-bold py-4'>the cont</h1>
            <p className='md:w-[60%] sm:w-[80%] sm-auto m-auto px-4 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error porro illo alias? Natus officia laboriosam quis debitis, nesciunt error illo?</p>
            <div className="flex justify-center items-center py-4">
            <AiFillStar size={40} className='text-yellow-600'/>
            <AiFillStar size={40} className='text-yellow-600'/>
            <AiFillStar size={40} className='text-yellow-600'/>
            <AiFillStar size={40} className='text-yellow-600'/>
            <AiFillStar size={40} className='text-yellow-600'/>
            </div>
            <button className='rounded-[20px] border solid-white bg-none py-2 px-4'>
                Read more
            </button>
        </div>
      
    </div>
  );
}

export default Hotel;
