import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const tradingEquipment = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/torgovy1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/torgovy2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/torgovy3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/torgovy4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/torgovy5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/torgovy6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/torgovy7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/torgovy8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/torgovy9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/torgovy10.jpeg` },
  { id: 11, image: `${import.meta.env.BASE_URL}images/torgovy11.jpeg` },
  { id: 12, image: `${import.meta.env.BASE_URL}images/torgovy12.jpeg` },
  { id: 13, image: `${import.meta.env.BASE_URL}images/torgovy13.jpeg` },
  { id: 14, image: `${import.meta.env.BASE_URL}images/torgovy14.jpeg` },
  { id: 15, image: `${import.meta.env.BASE_URL}images/torgovy15.jpeg` },
  { id: 16, image: `${import.meta.env.BASE_URL}images/torgovy16.jpeg` },
  { id: 17, image: `${import.meta.env.BASE_URL}images/torgovy17.jpeg` },
  { id: 18, image: `${import.meta.env.BASE_URL}images/torgovy18.jpeg` },
  { id: 19, image: `${import.meta.env.BASE_URL}images/torgovy19.jpeg` },
  { id: 20, image: `${import.meta.env.BASE_URL}images/torgovy20.jpeg` },
  { id: 21, image: `${import.meta.env.BASE_URL}images/torgovy21.jpeg` },
  { id: 22, image: `${import.meta.env.BASE_URL}images/torgovy22.jpeg` },
  { id: 23, image: `${import.meta.env.BASE_URL}images/torgovy23.jpeg` },
  { id: 24, image: `${import.meta.env.BASE_URL}images/torgovy24.jpeg` },
  { id: 25, image: `${import.meta.env.BASE_URL}images/torgovy25.jpeg` },
  { id: 26, image: `${import.meta.env.BASE_URL}images/torgovy26.jpeg` },
  { id: 27, image: `${import.meta.env.BASE_URL}images/torgovy27.jpeg` },
  { id: 28, image: `${import.meta.env.BASE_URL}images/torgovy28.jpeg` },
  { id: 29, image: `${import.meta.env.BASE_URL}images/torgovy29.jpeg` },
  { id: 30, image: `${import.meta.env.BASE_URL}images/torgovy30.jpeg` },
  { id: 31, image: `${import.meta.env.BASE_URL}images/torgovy31.jpeg` },
  { id: 32, image: `${import.meta.env.BASE_URL}images/torgovy32.jpeg` },
  { id: 33, image: `${import.meta.env.BASE_URL}images/torgovy33.jpeg` },
  { id: 34, image: `${import.meta.env.BASE_URL}images/torgovy34.jpeg` },
  { id: 35, image: `${import.meta.env.BASE_URL}images/torgovy35.jpeg` },
  { id: 36, image: `${import.meta.env.BASE_URL}images/torgovy36.jpeg` },
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
