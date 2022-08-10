import React from 'react';
import avatar from '../../assets/img/avatar.png';

const Navigation = () => {
  return (
    <nav class="bg-white border-gray-200 px-20 sm:px-4 py-2.5 rounded border-b-2">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="items-center">
          <p class="self-center text-xl font-semibold whitespace-nowrap">
            Food
          </p>
          <p class="text-myBlue">delivery</p>
        </div>
        <div class="flex items-center md:order-2">
          <img
            class="rounded-lg w-10 h-10 ring-2 ring-gray-300 p-0.5"
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
              xmlns="http://www.w3.org/2000/svg"
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
          class="hidden justify-items-end justify-items-end md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
            <li>
              <a href="#" class="md:p-0">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#" class="md:p-0">
                Deals
              </a>
            </li>
            <li>
              <a href="#" class="border-l-2 pl-8 md:p-0">
                My orders
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
