/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as IconMenu } from '../assets/images/icon-menu.svg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-white pt-8">
      <div className="container flex items-center">
        <Logo className="flex-shrink-0" />
        <div className="flex-grow ml-4 text-neutral-violet-gray">
          <button className="block sm:hidden ml-auto" onClick={() => setShowNav(!showNav)}>
            <IconMenu className="w-8 h-7 fill-current" />
          </button>
          <nav className="hidden sm:flex justify-between text-xs font-bold">
            <div className="flex items-center px-2">
              <a href="#" className="px-3">Features</a>
              <a href="#" className="px-3">Pricing</a>
              <a href="#" className="px-3">Resources</a>
            </div>
            <div className="flex items-center px-2">
              <a href="#" className="px-3">Login</a>
              <a href="#" className="ml-3 px-5 py-2 bg-primary-cyan text-white rounded-full">Sign Up</a>
            </div>
          </nav>
          {showNav && (
            <div className="container absolute right-0 w-full z-20 mt-3">
              <nav className="bg-primary-violet py-3 px-6 rounded-xl text-center text-white divide-y divide-neutral-violet-gray divide-opacity-20">
                <div className="py-2">
                  <a href="#" className="block py-3">Features</a>
                  <a href="#" className="block py-3">Pricing</a>
                  <a href="#" className="block py-3">Resources</a>
                </div>
                <div className="py-2">
                  <a href="#" className="block py-3">Login</a>
                  <a href="#" className="block mt-2 mb-3 py-2 bg-primary-cyan rounded-full">Sign Up</a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
  
export default Navbar;
  