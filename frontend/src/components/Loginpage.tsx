import React from 'react';
import Login from './Login';
import Loginagequote from './Loginagequote';

const Loginpage = () => {
  return (
    <div className='flex min-h-screen flex-col sm:flex-row  py-8 mt-36 items-center'>
      <div className='w-full sm:w-1/2 flex justify-center items-center bg-gray-50'>
        <Login />
      </div>
      <div className='hidden sm:w-1/2 sm:flex justify-center items-center bg-gray-100'>
        <Loginagequote />
      </div>
    </div>
  );
};

export default Loginpage;
