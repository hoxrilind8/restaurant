import FilterButtons from './components/FilterButtons';
import Navigation from './components/Navigation';
import RestaurantList from './components/RestaurantsList';

function App() {
  return (
    <div>
      <Navigation />
      <FilterButtons />
      <RestaurantList />
    </div>
  );
}

export default App;
