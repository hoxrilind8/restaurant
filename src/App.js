import React, { useState } from 'react';

import FilterButtons from './components/FilterButtons';
import Navigation from './components/Navigation';
import RestaurantList from './components/RestaurantsList';
import Cards from './components/Cards';

import { restaurants } from './utils/restaurants';
import { allFilters } from './utils/filters';

export default function App() {
  const [restaurantFilters, setRestaurantFilters] = useState(allFilters);

  function selectFilter(filterId) {
    const selectedFilterIndex = restaurantFilters.findIndex(
      ({ id }) => id === filterId
    );
    const newFilters = [...restaurantFilters];

    if (newFilters[selectedFilterIndex].active) {
      newFilters[selectedFilterIndex].active = false;
      return setRestaurantFilters(newFilters);
    }

    newFilters[selectedFilterIndex].active = true;
    return setRestaurantFilters(newFilters);
  }

  const activeFilters = restaurantFilters.filter((filter) => filter.active);
  const activeFiltersType = activeFilters.map(({ filterType }) => filterType);

  const filteredRestaurants = restaurants.filter(({ type }) => {
    return type.some((t) => activeFiltersType.includes(t));
  });

  const restaurantsList =
    filteredRestaurants.length === 0 ? restaurants : filteredRestaurants;

  return (
    <>
      <Navigation />
      <hr />
      <Cards />
      <FilterButtons selectFilter={selectFilter} filters={restaurantFilters} />
      <RestaurantList restaurants={restaurantsList} />
    </>
  );
}
