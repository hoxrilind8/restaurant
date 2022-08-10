import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CircleIcon from '@mui/icons-material/Circle';

const RestaurantList = ({ restaurants }) => {
  return (
    <div class="m-10">
      <p class="m-2">Nearby Restaurants</p>
      <div class="lg:grid grid-cols-3 gap-4 m-2">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            class="max-w-sm md:mt-2 bg-white rounded-lg border border-gray-200 dark:border-gray-300"
          >
            <img
              class="rounded-t-lg object-cover h-48 w-96"
              src={restaurant.image}
              alt=""
            />
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {restaurant.name}
              </h5>
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
