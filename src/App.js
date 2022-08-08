import React, { useState } from 'react';

import FilterButtons from './components/FilterButtons';
import Navigation from './components/Navigation';
import RestaurantList from './components/RestaurantsList';
import { restaurants } from './utils/restaurant';

function App() {
  const [filteredRestaurant, setFilteredRestaurants] = useState(restaurants);
  const filterRestaurant = (val) => {
    const newRestaurants = restaurants.filter((newVal) => {
      const type = newVal.type.map((type) => type);
      for (let i = 0; i < type.length; i++) {
        if (type[i] === val) return val;
      }
    });
    setFilteredRestaurants(newRestaurants);
  };
  return (
    <div>
      <Navigation />
      <FilterButtons filterRest={filterRestaurant} />
      <RestaurantList restaurants={filteredRestaurant} />
    </div>
  );
}

export default App;
