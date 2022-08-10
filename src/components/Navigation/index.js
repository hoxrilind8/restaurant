import React from 'react';

import avatar from '../../assets/img/avatar.png';
import shoppingBag from '../../assets/img/shopping_bag.png';

const Navigation = () => {
  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div>
          <div class="flex items-center">
            <div class="items-center">
              <p class="self-center text-xl font-semibold whitespace-nowrap">
                Food
              </p>
              <p class="text-myBlue">delivery</p>
            </div>
            <div class="hidden relative md:block ml-10">
              <div class="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block p-2 w-full text-gray-900 bg-searchBckg rounded-lg sm:text-sm "
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div class="flex items-center md:order-2">
            <span class="p-1.5 rounded-lg bg-shoppingBckg mr-2">
              <img
                class="w-6 h-6 rounded-lg  bg-shoppingBckg"
                src={shoppingBag}
                alt="shopping bag"
              />
            </span>
            <img
              class="w-8 h-8 rounded-lg ring-2 ring-gray-300 p-0.5"
              src={avatar}
              alt="user photo"
            />
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
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
            class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
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
};

export default Navigation;
