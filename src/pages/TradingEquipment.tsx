import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const tradingEquipment = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/trading1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/trading2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/trading3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/trading4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/trading5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/trading6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/trading7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/trading8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/trading9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/trading10.jpeg` }
];

function TradingEquipment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Торговое оборудование LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tradingEquipment.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt="Торговое оборудование LOFT"
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

export default TradingEquipment;
