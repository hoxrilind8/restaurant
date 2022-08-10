import React from 'react';

import dessertImg from '../../assets/img/deserts_card.png';
import burgerImg from '../../assets/img/burger_card.png';

const Cards = () => {
  return (
    <div class="sm:flex sm:justify-evenly m-2">
      <div class="flex mb-2 flex-col sm:w-1/2 flex-col rounded-lg border md:flex-row  bg-desertBckg">
        <div class="flex lg:flex-col justify-between p-4">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              All deserts
            </h5>
            <p class="mb-3 font-normal text-desertDiscount text-[40px] font-extrabold">
              20% OFF
            </p>
          </div>
          <div>
            <p class="text-infoDiscount">Deserty</p>
          </div>
        </div>
        <img
          class="object-cover rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg sm:order-first"
          src={dessertImg}
          alt=""
        />
      </div>
      <div class="flex mb-2 sm:w-1/2 flex-col rounded-lg border md:flex-row md:max-w-xl bg-burgerBckg">
        <div class="flex lg:flex-col justify-between p-4 ">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Big Burgers
            </h5>
            <p class="mb-3 font-normal text-burgerDiscount text-[40px] font-extrabold">
              50% OFF
            </p>
          </div>
          <div>
            <p class="text-infoDiscount">Fooddies</p>
          </div>
        </div>
        <img
          class="object-cover rounded-t-lg md:h-auto  md:rounded-none md:rounded-l-lg sm:order-first  "
          src={burgerImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Cards;
