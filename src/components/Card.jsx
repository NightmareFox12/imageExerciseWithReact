import React from 'react';

export default function Card({ data }) {
  return (
    <>
      {data.map((value, key) => (
        <article
          key={key}
          className="bg-slate-700 w-100 h-100 flex flex-col justify-center rounded-md hover:scale-105 hover:bg-slate-900 hover:transition ease-in-out duration-500"
        >
          <img
            src={value.picture.large}
            alt="Usuario"
            className="rounded-full object-cover ring-1 ring-white m-4"
            loading="eager"
            draggable={false}
            title={`${value.name.first} ${value.name.last}`}
          />
          <h2 className="text-center font-semibold text-xl mb-5 text-white">
            {value.name.first} {value.name.last}
          </h2>
        </article>
      ))}
    </>
  );
}
