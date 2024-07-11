import React, { useState } from 'react';

import mobilelogo from '../assets/logo.png';

import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  

  return (
    <nav className="bg-black fixed top-0 w-full z-30 p-4">
      <div className="flex-1 flex-wrap w-full flex justify-between items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full sm:py-4">
          <div className="flex justify-between items-center  w-full">
            <div className="flex-shrink-0">
            <Link className='flex items-center gap-2 sm:gap-3 justify-center' to='/'><img className='size-8 sm:size-12' src={mobilelogo} alt="caretrackplus logo" /><p className="text-xl sm:text-3xl font-semibold text-primary">Laugh<span className="text-secondary">Diet</span> 2.0</p></Link>
            {/* <Link to='/'><img className='size-12 sm:hidden' src={mobilelogo} alt="caretrackplus logo" /></Link> */}

            </div>
            <div className="hidden text-xl font-normal text-white  md:ml-6 lg:flex md:space-x-8 lg:justify-center lg:items-center lg:gap-4 flex-shrink-1">
            <Link to='/' className='hover:text-primary'>Home</Link>
        {/* <Link to='/pricing' className='hover:text-primary'>Abo</Link> */}
          <Link to='/about' className='hover:text-primary'>About</Link>
         <Link to='/artists' className='hover:text-primary'>Artists</Link>
            </div>
            <ul className="text-xl font-semibold hidden nav-links lg:flex lg:justify-center  lg:items-center lg:gap-4 text-white">
       <Link to='/' className='w-42 max-w-42 text-xl font-semibold border border-secondary hover:border-primary hover:text-secondary text-primary py-2 px-12 rounded-sm lg:rounded-lg md:rounded-md xl:rounded-xl'> Get Ticket</Link>
       {/* <Link to='/register' className='text-xl font-semibold text-center w-40 max-w-42 bg-secondary py-2 px-4 rounded-sm hover:bg-primary lg:rounded-lg md:rounded-md xl:rounded-xl'>Try for free</Link> */}
     </ul>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-primary text-black inline-flex items-center justify-center p-2 rounded-lg hover:text-black hover:bg-secondary focus:outline-none focus:bg-secondary focus:text-back"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`} id="mobile-menu">
        <div className="h-screen px-1 pt-2 pb-60 space-y-1 sm:px-3 flex flex-col gap-2 text-xl font-normal text-white">

          <Link onClick={closeMenu}
 to="/" className=" font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            Home
          </Link>
          <Link onClick={closeMenu}
to="/about" className="font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            About
          </Link>
          <Link onClick={closeMenu}
 to="/artists" className=" font-normal text-xl block px-3 py-2 rounded-md hover:bg-primary">
            Artists
          </Link>
          <Link to='/' onClick={closeMenu}
 className='text-primary text-xl block py-2 px-6 w-40 rounded-md text-left font-medium border hover:border-primary hover:text-secondary  border-secondary'> Get ticket</Link>
       {/* <Link to='/register' onClick={closeMenu}
 className='bg-secondary text-white py-2 px-6 w-40 max-w-44 hover:bg-primary rounded-md lg:rounded-lg md:rounded-md xl:rounded-xl '>Try for free</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
