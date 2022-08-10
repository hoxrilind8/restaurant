import React, { useCallback } from 'react';

export default function FilterButtons({ selectFilter, filters }) {
  const onClick = useCallback((event) => {
    const { id } = event.currentTarget;

    return selectFilter(Number(id));
  });

  return (
    <div className="lg:flex grid grid-cols-3 gap-4 md:m-10">
      {filters.map(({ id, icon, name, active }) => (
        <div
          className={`border p-3 sm:w-full rounded-lg cursor-pointer hover:border-myBlue hover:bg-primary ${
            active && 'border-myBlue bg-primary'
          }`}
          key={id}
          id={id}
          onClick={onClick}
        >
          <p className="text-center">{icon}</p>
          <h5
            className={`mb-2 text-l text-center font-semibold tracking-tight text-gray-900 ${
              active && 'text-myBlue'
            }`}
          >
            {name}
          </h5>
        </div>
      ))}
    </div>
  );
}
