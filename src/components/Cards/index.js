import React from 'react';

import dessertImg from '../../assets/img/deserts_card.png';
import burgerImg from '../../assets/img/burger_card.png';

const Cards = () => {
  return (
    <div className="sm:flex sm:justify-evenly m-2">
      <div className="flex mb-2 flex-col sm:mr-2 sm:w-1/2 rounded-lg md:flex-row bg-desertBckg">
        <div className="flex md:flex-col justify-between p-4">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              All deserts
            </h5>
            <p className="mb-3 font-normal text-desertDiscount text-[40px] font-extrabold">
              20% OFF
            </p>
          </div>
          <div>
            <p className="text-infoDiscount">Deserty</p>
          </div>
        </div>
        <img
          className="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg md:order-first"
          src={dessertImg}
          alt="Desert"
        />
      </div>
      <div className="flex mb-2 sm:w-1/2 flex-col rounded-lg md:flex-row md:max-w-xl bg-burgerBckg">
        <div className="flex md:flex-col justify-between p-4">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Big Burgers
            </h5>
            <p className="mb-3 font-normal text-burgerDiscount text-[40px] font-extrabold">
              50% OFF
            </p>
          </div>
          <div>
            <p className="text-infoDiscount">Fooddies</p>
          </div>
        </div>
        <img
          className="object-cover rounded-t-lg md:h-auto md:rounded-none md:rounded-l-lg md:order-first  "
          src={burgerImg}
          alt="Burger"
        />
      </div>
    </div>
  );
};

export default Cards;
