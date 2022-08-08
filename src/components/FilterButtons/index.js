import React from 'react';

const FilterButtons = ({ filterRest }) => {
  return (
    <div class="lg:flex m-2 justify-between mg:grid">
      <div
        class="p-6 mr-10 max-w-sm  w-full bg-white rounded-lg border border-gray-200 cursor-pointer"
        onClick={() => filterRest('Pizza')}
      >
        <p class="text-center">🍕</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          Pizza
        </h5>
      </div>
      <div
        class="p-6 mr-10 max-w-sm w-full bg-white rounded-lg border border-gray-200 cursor-pointer"
        onClick={() => filterRest('Burger')}
      >
        <p class="text-center">🍔</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          Burger
        </h5>
      </div>
      <div class="p-6 mr-10 max-w-sm w-full bg-white rounded-lg border border-gray-200 cursor-pointer">
        <p class="text-center">🥩</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          BBQ
        </h5>
      </div>
      <div
        class="p-6 mr-10 max-w-sm w-full bg-white rounded-lg border border-gray-200 cursor-pointer"
        onClick={() => filterRest('Sushi')}
      >
        <p class="text-center">🍣</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          Sushi
        </h5>
      </div>
      <div class="p-6 mr-10 max-w-sm w-full bg-white rounded-lg border border-gray-200 cursor-pointer">
        <p class="text-center">🥦</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          Vegan
        </h5>
      </div>
      <div class="p-6 mr-10 max-w-sm w-full bg-white rounded-lg border border-gray-200 cursor-pointer">
        <p class="text-center">🧁</p>
        <h5 class="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900">
          Desserts
        </h5>
      </div>
    </div>
  );
};

export default FilterButtons;
