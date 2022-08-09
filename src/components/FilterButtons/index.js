import React, { useCallback } from 'react';

export default function FilterButtons({ selectFilter, filters }) {
  const onClick = useCallback((event) => {
    const { id } = event.currentTarget;

    return selectFilter(Number(id));
  });

  return (
    <div className="lg:flex lg:justify-evenly grid grid-cols-3 w-full">
      {filters.map(({ id, icon, name, active }) => (
        <div
          className={`border sm:m-10 p-6  w-full rounded-lg cursor-pointer hover:border-myBlue hover:bg-primary ${
            active ? 'border-myBlue bg-primary' : ''
          }`}
          key={id}
          id={id}
          onClick={onClick}
        >
          <p className="text-center">{icon}</p>
          <h5 className="mb-2 text-l text-center font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </div>
      ))}
    </div>
  );
}
