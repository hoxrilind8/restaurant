import React, { useState } from 'react';

import FilterButtons from './components/FilterButtons';
import Navigation from './components/Navigation';
import RestaurantList from './components/RestaurantsList';
import Cards from './components/Cards';

import { restaurants } from './utils/restaurants';
import { allFilters } from './utils/filters';

export default function App() {
  const [filters, setFilters] = useState(allFilters);

  function selectFilter(filterId) {
    const selectedFilterIndex = filters.findIndex(({ id }) => id === filterId);
    const newFilters = [...filters];

    if (newFilters[selectedFilterIndex].active) {
      newFilters[selectedFilterIndex].active = false;
      return setFilters(newFilters);
    }

    newFilters[selectedFilterIndex].active = true;
    return setFilters(newFilters);
  }

  const activeFilters = filters.filter((filter) => filter.active);
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
      <FilterButtons selectFilter={selectFilter} filters={filters} />
      <RestaurantList restaurants={restaurantsList} />
    </>
  );
}
