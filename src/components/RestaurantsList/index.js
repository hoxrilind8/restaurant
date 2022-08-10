import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';

import shoppingBag from '../../assets/img/shopping_bag.png';

const RestaurantList = ({ restaurants }) => {
  return (
    <div class="md:m-10">
      <p class="m-2">Nearby Restaurants</p>
      <div class="md:grid grid-cols-3 gap-4 m-2">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            class="mb-2 md:mt-2 bg-white rounded-lg border border-gray-200 "
          >
            <img
              class="object-cover w-full rounded-lg md:h-auto rounded-b-none"
              src={restaurant.image}
              alt=""
            />
            <div class="p-5">
              <div class="flex justify-between">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {restaurant.name}
                </h5>
                <img
                  class="w-6 h-6 rounded-lg mr-2 bg-shoppingBckg"
                  src={shoppingBag}
                  alt="shopping bag"
                />
              </div>
              <div class="mb-3 flex font-normal text-gray-700 dark:text-gray-400">
                <AccessTimeIcon />
                <p class="ml-2">{restaurant.deliveryTime}</p>
                <CircleIcon
                  sx={{
                    color: 'blue',
                    fontSize: 5,
                    alignSelf: 'center',
                    marginLeft: '10px',
                  }}
                />
                <p class="ml-2">{restaurant.price} min sum</p>
              </div>
              <div class="flex">
                {restaurant.tag.map((type) => (
                  <p key={type} class="mr-2 bg-slate-300 rounded-2xl p-1">
                    {type}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
