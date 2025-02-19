import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const computerDesks = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/pctable1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/pctable2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/pctable3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/pctable4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/pctable5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/pctable6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/pctable7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/pctable8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/pctable9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/pctable10.jpeg` },
  { id: 11, image: `${import.meta.env.BASE_URL}images/pctable11.jpeg` },
  { id: 12, image: `${import.meta.env.BASE_URL}images/pctable12.jpeg` },
  { id: 13, image: `${import.meta.env.BASE_URL}images/pctable13.jpeg` },
  { id: 14, image: `${import.meta.env.BASE_URL}images/pctable14.jpeg` },
  { id: 15, image: `${import.meta.env.BASE_URL}images/pctable15.jpeg` },
  { id: 16, image: `${import.meta.env.BASE_URL}images/pctable16.jpeg` },
  { id: 17, image: `${import.meta.env.BASE_URL}images/pctable17.jpeg` },
  { id: 18, image: `${import.meta.env.BASE_URL}images/pctable18.jpeg` },
  { id: 19, image: `${import.meta.env.BASE_URL}images/pctable19.jpeg` },
  { id: 20, image: `${import.meta.env.BASE_URL}images/pctable20.jpeg` },
  { id: 21, image: `${import.meta.env.BASE_URL}images/pctable21.jpeg` },
  { id: 22, image: `${import.meta.env.BASE_URL}images/pctable22.jpeg` },
  { id: 23, image: `${import.meta.env.BASE_URL}images/pctable23.jpeg` },
  { id: 24, image: `${import.meta.env.BASE_URL}images/pctable24.jpeg` },
  { id: 25, image: `${import.meta.env.BASE_URL}images/pctable25.jpeg` },
  { id: 26, image: `${import.meta.env.BASE_URL}images/pctable26.jpeg` },
  { id: 27, image: `${import.meta.env.BASE_URL}images/pctable27.jpeg` },
  { id: 28, image: `${import.meta.env.BASE_URL}images/pctable28.jpeg` },
  { id: 29, image: `${import.meta.env.BASE_URL}images/pctable29.jpeg` },
  { id: 30, image: `${import.meta.env.BASE_URL}images/pctable30.jpeg` },
  { id: 31, image: `${import.meta.env.BASE_URL}images/pctable31.jpeg` },
  { id: 32, image: `${import.meta.env.BASE_URL}images/pctable32.jpeg` },
  { id: 33, image: `${import.meta.env.BASE_URL}images/pctable33.jpeg` },
  { id: 34, image: `${import.meta.env.BASE_URL}images/pctable34.jpeg` },
  { id: 35, image: `${import.meta.env.BASE_URL}images/pctable35.jpeg` },
  { id: 36, image: `${import.meta.env.BASE_URL}images/pctable36.jpeg` },
  { id: 37, image: `${import.meta.env.BASE_URL}images/pctable37.jpeg` },
  { id: 38, image: `${import.meta.env.BASE_URL}images/pctable38.jpeg` },
  { id: 39, image: `${import.meta.env.BASE_URL}images/pctable39.jpeg` },
  { id: 40, image: `${import.meta.env.BASE_URL}images/pctable40.jpeg` },
  { id: 41, image: `${import.meta.env.BASE_URL}images/pctable41.jpeg` },
  { id: 42, image: `${import.meta.env.BASE_URL}images/pctable42.jpeg` },
  { id: 43, image: `${import.meta.env.BASE_URL}images/pctable43.jpeg` },
  { id: 44, image: `${import.meta.env.BASE_URL}images/pctable44.jpeg` },
  { id: 45, image: `${import.meta.env.BASE_URL}images/pctable45.jpeg` },
  { id: 46, image: `${import.meta.env.BASE_URL}images/pctable46.jpeg` }
];

function ComputerDesks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Компьютерные столы LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {computerDesks.map((desk) => (
            <div 
              key={desk.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={desk.image} 
                alt="Компьютерный стол LOFT"
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

export default ComputerDesks;
