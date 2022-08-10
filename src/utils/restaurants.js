import burgers_and_pizza from '../assets/img/burgers_and_pizza.png';
import japanese_sushi from '../assets/img/japanese_sushi.png';
import kobe from '../assets/img/kobe.png';
import ninja_sushi from '../assets/img/ninja_sushi.png';
import sushi_house from '../assets/img/sushi_house.png';
import sushi_master from '../assets/img/sushi_master.png';

export const restaurants = [
  {
    id: 1,
    name: 'Royal Sushi House',
    type: ['sushi'],
    tag: ['🍣 Sushi'],
    deliveryTime: '30-40min',
    price: '$32',
    image: sushi_house,
  },
  {
    id: 2,
    name: 'Burgers & Pizza',
    type: ['burger', 'pizza'],
    tag: ['🍔 Burger', '🍕 Pizza'],
    deliveryTime: '40-60min',
    price: '$24',
    image: burgers_and_pizza,
  },
  {
    id: 3,
    name: 'Ninja Sushi',
    type: ['sushi'],
    tag: ['🍣 Sushi'],
    deliveryTime: '20-40min',
    price: '$40',
    image: ninja_sushi,
  },
  {
    id: 4,
    name: 'Sushi Master',
    type: ['sushi'],
    tag: ['🍣 Sushi'],
    deliveryTime: '60-70min',
    price: '$49',
    image: sushi_master,
  },
  {
    id: 5,
    name: 'Japanese Sushi',
    type: ['sushi'],
    tag: ['🍣 Sushi'],
    deliveryTime: '30-50min',
    price: '$104',
    image: japanese_sushi,
  },
  {
    id: 6,
    name: 'Kobe',
    type: ['sushi'],
    tag: ['🍣 Sushi'],
    deliveryTime: '20-30min',
    price: '$57',
    image: kobe,
  },
  {
    id: 7,
    name: 'BBQ',
    type: ['bbq'],
    tag: ['🥩 BBQ'],
    deliveryTime: '20-30min',
    price: '$57',
    image: kobe,
  },
];
