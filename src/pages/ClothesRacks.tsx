import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const clothesRacks = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/shelf1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/shelf2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/shelf3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/shelf4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/shelf5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/shelf6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/shelf7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/shelf8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/shelf9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/shelf10.jpeg` },
  { id: 11, image: `${import.meta.env.BASE_URL}images/shelf11.jpeg` },
  { id: 12, image: `${import.meta.env.BASE_URL}images/shelf12.jpeg` },
  { id: 13, image: `${import.meta.env.BASE_URL}images/shelf13.jpeg` },
  { id: 14, image: `${import.meta.env.BASE_URL}images/shelf14.jpeg` },
  { id: 15, image: `${import.meta.env.BASE_URL}images/shelf15.jpeg` }
];

function ClothesRacks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Вешалки LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clothesRacks.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt="Вешалка LOFT"
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

export default ClothesRacks;
