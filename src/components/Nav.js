import React from 'react';
import { Menu } from '@headlessui/react';
import NavButton from './NavButton';

function Header() {
  return (
    <header className='nav__container flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <div className='nav__title flex items-center flex-shrink-0 text-white mr-6'>
        <span className='nav__title-text font-semibold text-xl tracking-tight mr-4'>Current Sea</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          stroke-width='2'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </div>
      <NavButton />
      <div className='nav__items w-full flex-grow lg:flex lg:items-center lg:w-auto hidden'>
        <div className='text-sm lg:flex-grow'>
          <a
            href='#responsive-header'
            className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
          >
            About Me
          </a>
          <a href='#responsive-header' className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'>
            Contact
          </a>
        </div>
        <div>
          <a
            href='/'
            className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0'
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
