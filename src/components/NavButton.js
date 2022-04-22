import React, { Component } from 'react';
import { Menu, Transition } from '@headlessui/react';

export class NavButton extends Component {
  render() {
    return (
      <Menu as={'div'} className='nav__button block lg:hidden'>
        <Menu.Button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </Menu.Button>

        <Transition
          enter='transition ease-in-out duration-600'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-75'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Menu.Items className='nav__items w-full block flex-grow absolute bg-gray-800 left-0 px-6 p-4'>
            <div className='text-sm lg:flex-grow'>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
              >
                About Me
              </a>
              <a
                href='#responsive-header'
                className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
              >
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
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }
}

export default NavButton;
