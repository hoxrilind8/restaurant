import React from 'react';

import avatar from '../../assets/img/avatar.png';
import shoppingBag from '../../assets/img/shopping_bag.png';

export default function Navigation() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <div className="flex items-center">
            <div className="items-center">
              <p className="self-center text-xl font-semibold whitespace-nowrap">
                Food
              </p>
              <p className="text-myBlue font-black">delivery</p>
            </div>
            <div className="hidden relative md:block ml-10">
              <div className="flex absolute inset-y-0 pr-2 right-0 items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="gray"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block p-2 w-full text-gray-900 bg-searchBckg rounded-lg sm:text-sm "
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center md:order-2">
            <span className="p-1.5 rounded-lg bg-shoppingBckg mr-2">
              <img
                className="w-6 h-6 rounded-lg  bg-shoppingBckg"
                src={shoppingBag}
                alt="shopping bag"
              />
            </span>
            <img
              className="w-8 h-8 rounded-lg ring-2 ring-gray-300 p-0.5"
              src={avatar}
              alt="user photo"
            />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                >
                  My orders
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
