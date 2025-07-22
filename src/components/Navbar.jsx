import React from 'react';

const Navbar = () => (
  <nav className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-900 sticky top-0 z-50">
    <h1 className="text-2xl font-bold text-purple-600">Edukrite</h1>
    <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">Join Waitlist</button>
  </nav>
);

export default Navbar;