import React, { useEffect } from 'react';

import WhatsAppButton from '../components/WhatsAppButton';

const shelves = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/stellazh1.jpeg`
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/stellazh2.jpeg`
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/stellazh3.jpeg`
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/stellazh4.jpeg`
  },
  {
    id: 5,
    image: `${import.meta.env.BASE_URL}images/stellazh5.jpeg`
  },
  {
    id: 6,
    image: `${import.meta.env.BASE_URL}images/stellazh6.jpeg`
  },
  {
    id: 7,
    image: `${import.meta.env.BASE_URL}images/stellazh7.jpeg`
  },
  {
    id: 8,
    image: `${import.meta.env.BASE_URL}images/stellazh8.jpeg`
  },
  {
    id: 9,
    image: `${import.meta.env.BASE_URL}images/stellazh9.jpeg`
  },
  {
    id: 10,
    image: `${import.meta.env.BASE_URL}images/stellazh10.jpeg`
  },
  {
    id: 11,
    image: `${import.meta.env.BASE_URL}images/stellazh11.jpeg`
  },
  {
    id: 12,
    image: `${import.meta.env.BASE_URL}images/stellazh12.jpeg`
  },
  {
    id: 13,
    image: `${import.meta.env.BASE_URL}images/stellazh13.jpeg`
  },
  {
    id: 14,
    image: `${import.meta.env.BASE_URL}images/stellazh14.jpeg`
  },
  {
    id: 15,
    image: `${import.meta.env.BASE_URL}images/stellazh15.jpeg`
  },
  {
    id: 16,
    image: `${import.meta.env.BASE_URL}images/stellazh16.jpeg`
  },
  {
    id: 17,
    image: `${import.meta.env.BASE_URL}images/stellazh17.jpeg`
  },
  {
    id: 18,
    image: `${import.meta.env.BASE_URL}images/stellazh18.jpeg`
  },
  {
    id: 19,
    image: `${import.meta.env.BASE_URL}images/stellazh19.jpeg`
  },
  {
    id: 20,
    image: `${import.meta.env.BASE_URL}images/stellazh20.jpeg`
  },
  {
    id: 21,
    image: `${import.meta.env.BASE_URL}images/stellazh21.jpeg`
  },
  {
    id: 22,
    image: `${import.meta.env.BASE_URL}images/stellazh22.jpeg`
  },
  {
    id: 23,
    image: `${import.meta.env.BASE_URL}images/stellazh23.jpeg`
  },
  {
    id: 24,
    image: `${import.meta.env.BASE_URL}images/stellazh24.jpeg`
  },
  {
    id: 25,
    image: `${import.meta.env.BASE_URL}images/stellazh25.jpeg`
  },
  {
    id: 26,
    image: `${import.meta.env.BASE_URL}images/stellazh26.jpeg`
  },
  {
    id: 27,
    image: `${import.meta.env.BASE_URL}images/stellazh27.jpeg`
  },
  {
    id: 28,
    image: `${import.meta.env.BASE_URL}images/stellazh28.jpeg`
  },
  {
    id: 29,
    image: `${import.meta.env.BASE_URL}images/stellazh29.jpeg`
  },
  {
    id: 30,
    image: `${import.meta.env.BASE_URL}images/stellazh30.jpeg`
  },
  {
    id: 31,
    image: `${import.meta.env.BASE_URL}images/stellazh31.jpeg`
  },
  {
    id: 33,
    image: `${import.meta.env.BASE_URL}images/stellazh33.jpeg`
  },
  {
    id: 34,
    image: `${import.meta.env.BASE_URL}images/stellazh34.jpeg`
  },
  {
    id: 35,
    image: `${import.meta.env.BASE_URL}images/stellazh35.jpeg`
  }
];

function Shelves() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Стеллажи LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shelves.map((shelf) => (
            <div 
              key={shelf.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={shelf.image} 
                alt="Стеллаж LOFT"
                className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}

export default Shelves