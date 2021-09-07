import React from 'react';

const Navbar = () => {
  return (
    <nav className='grid grid-cols-2'>
      <h1 className='mr-auto font-semibold text-lg'>Allraga</h1>
      <img src='./images/icons/user.svg' className='ml-auto' alt='user icon'/>
    </nav>
  );
};

export default Navbar;