import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const furniture = [
  {
    id: 1,
    image: `${import.meta.env.BASE_URL}images/table1.jpeg`
  },
  {
    id: 2,
    image: `${import.meta.env.BASE_URL}images/table2.jpeg`
  },
  {
    id: 3,
    image: `${import.meta.env.BASE_URL}images/table3.jpeg`
  },
  {
    id: 4,
    image: `${import.meta.env.BASE_URL}images/table4.jpeg`
  },
  {
    id: 5,
    image: `${import.meta.env.BASE_URL}images/table5.jpeg`
  },
  {
    id: 6,
    image: `${import.meta.env.BASE_URL}images/table6.jpeg`
  },
  {
    id: 7,
    image: `${import.meta.env.BASE_URL}images/table7.jpeg`
  },
  {
    id: 8,
    image: `${import.meta.env.BASE_URL}images/table8.jpeg`
  },
  {
    id: 9,
    image: `${import.meta.env.BASE_URL}images/table9.jpeg`
  },
  {
    id: 10,
    image: `${import.meta.env.BASE_URL}images/table10.jpeg`
  },
  {
    id: 11,
    image: `${import.meta.env.BASE_URL}images/table11.jpeg`
  },
  {
    id: 12,
    image: `${import.meta.env.BASE_URL}images/table12.jpeg`
  },
  {
    id: 13,
    image: `${import.meta.env.BASE_URL}images/table13.jpeg`
  },
  {
    id: 14,
    image: `${import.meta.env.BASE_URL}images/table14.jpeg`
  },
  {
    id: 15,
    image: `${import.meta.env.BASE_URL}images/table15.jpeg`
  },
  {
    id: 16,
    image: `${import.meta.env.BASE_URL}images/table16.jpeg`
  },
  {
    id: 17,
    image: `${import.meta.env.BASE_URL}images/table17.jpeg`
  },
  {
    id: 18,
    image: `${import.meta.env.BASE_URL}images/table18.jpeg`
  },
  {
    id: 19,
    image: `${import.meta.env.BASE_URL}images/table19.jpeg`
  },
  {
    id: 20,
    image: `${import.meta.env.BASE_URL}images/table20.jpeg`
  },
  {
    id: 21,
    image: `${import.meta.env.BASE_URL}images/table21.jpeg`
  },
  {
    id: 22,
    image: `${import.meta.env.BASE_URL}images/table22.jpeg`
  },
  {
    id: 23,
    image: `${import.meta.env.BASE_URL}images/table23.jpeg`
  },
  {
    id: 24,
    image: `${import.meta.env.BASE_URL}images/table24.jpeg`
  },
  {
    id: 25,
    image: `${import.meta.env.BASE_URL}images/table25.jpeg`
  },
  {
    id: 26,
    image: `${import.meta.env.BASE_URL}images/table26.jpeg`
  },
  {
    id: 27,
    image: `${import.meta.env.BASE_URL}images/table27.jpeg`
  },
  {
    id: 28,
    image: `${import.meta.env.BASE_URL}images/table28.jpeg`
  },
  {
    id: 29,
    image: `${import.meta.env.BASE_URL}images/table29.jpeg`
  },
  {
    id: 30,
    image: `${import.meta.env.BASE_URL}images/table30.jpeg`
  },
  {
    id: 31,
    image: `${import.meta.env.BASE_URL}images/table31.jpeg`
  },
  {
    id: 32,
    image: `${import.meta.env.BASE_URL}images/table32.jpeg`
  },
  {
    id: 33,
    image: `${import.meta.env.BASE_URL}images/table33.jpeg`
  },
  {
    id: 34,
    image: `${import.meta.env.BASE_URL}images/table34.jpeg`
  },
  {
    id: 35,
    image: `${import.meta.env.BASE_URL}images/table35.jpeg`
  },
  {
    id: 36,
    image: `${import.meta.env.BASE_URL}images/table36.jpeg`
  },
  {
    id: 37,
    image: `${import.meta.env.BASE_URL}images/table37.jpeg`
  },
  {
    id: 38,
    image: `${import.meta.env.BASE_URL}images/table38.jpeg`
  },
  {
    id: 39,
    image: `${import.meta.env.BASE_URL}images/table39.jpeg`
  },
  {
    id: 40,
    image: `${import.meta.env.BASE_URL}images/table40.jpeg`
  },
  {
    id: 41,
    image: `${import.meta.env.BASE_URL}images/table41.jpeg`
  },
  {
    id: 42,
    image: `${import.meta.env.BASE_URL}images/table42.jpeg`
  },
  {
    id: 43,
    image: `${import.meta.env.BASE_URL}images/table43.jpeg`
  },
  {
    id: 44,
    image: `${import.meta.env.BASE_URL}images/table44.jpeg`
  },
  {
    id: 45,
    image: `${import.meta.env.BASE_URL}images/table45.jpeg`
  },
  {
    id: 46,
    image: `${import.meta.env.BASE_URL}images/table46.jpeg`
  },
  {
    id: 47,
    image: `${import.meta.env.BASE_URL}images/table47.jpeg`
  },
  {
    id: 48,
    image: `${import.meta.env.BASE_URL}images/table48.jpeg`
  },
  {
    id: 49,
    image: `${import.meta.env.BASE_URL}images/table49.jpeg`
  },
  {
    id: 50,
    image: `${import.meta.env.BASE_URL}images/table50.jpeg`
  },
  {
    id: 51,
    image: `${import.meta.env.BASE_URL}images/table51.jpeg`
  },
  {
    id: 52,
    image: `${import.meta.env.BASE_URL}images/table52.jpeg`
  },
  {
    id: 53,
    image: `${import.meta.env.BASE_URL}images/table53.jpeg`
  },
  {
    id: 54,
    image: `${import.meta.env.BASE_URL}images/table54.jpeg`
  },
  {
    id: 55,
    image: `${import.meta.env.BASE_URL}images/table55.jpeg`
  },
  {
    id: 56,
    image: `${import.meta.env.BASE_URL}images/table56.jpeg`
  },
  {
    id: 57,
    image: `${import.meta.env.BASE_URL}images/table57.jpeg`
  },
  {
    id: 58,
    image: `${import.meta.env.BASE_URL}images/table58.jpeg`
  },
  {
    id: 59,
    image: `${import.meta.env.BASE_URL}images/table59.jpeg`
  },
  {
    id: 60,
    image: `${import.meta.env.BASE_URL}images/table60.jpeg`
  },
  {
    id: 61,
    image: `${import.meta.env.BASE_URL}images/table61.jpeg`
  },
  {
    id: 62,
    image: `${import.meta.env.BASE_URL}images/table62.jpeg`
  },
  {
    id: 63,
    image: `${import.meta.env.BASE_URL}images/table63.jpeg`
  },
  {
    id: 64,
    image: `${import.meta.env.BASE_URL}images/table64.jpeg`
  },
  {
    id: 65,
    image: `${import.meta.env.BASE_URL}images/table65.jpeg`
  },
  {
    id: 66,
    image: `${import.meta.env.BASE_URL}images/table66.jpeg`
  },
  {
    id: 67,
    image: `${import.meta.env.BASE_URL}images/table67.jpeg`
  },
  {
    id: 68,
    image: `${import.meta.env.BASE_URL}images/table68.jpeg`
  },
  {
    id: 69,
    image: `${import.meta.env.BASE_URL}images/table69.jpeg`
  },
  {
    id: 70,
    image: `${import.meta.env.BASE_URL}images/table70.jpeg`
  },
  {
    id: 71,
    image: `${import.meta.env.BASE_URL}images/table71.jpeg`
  },
  {
    id: 72,
    image: `${import.meta.env.BASE_URL}images/table72.jpeg`
  },
  {
    id: 73,
    image: `${import.meta.env.BASE_URL}images/table73.jpeg`
  },
  {
    id: 74,
    image: `${import.meta.env.BASE_URL}images/table74.jpeg`
  },
  {
    id: 75,
    image: `${import.meta.env.BASE_URL}images/table75.jpeg`
  },
  {
    id: 76,
    image: `${import.meta.env.BASE_URL}images/table76.jpeg`
  },
  {
    id: 77,
    image: `${import.meta.env.BASE_URL}images/table77.jpeg`
  },
  {
    id: 78,
    image: `${import.meta.env.BASE_URL}images/table78.jpeg`
  },
  {
    id: 79,
    image: `${import.meta.env.BASE_URL}images/table79.jpeg`
  },
  {
    id: 80,
    image: `${import.meta.env.BASE_URL}images/table80.jpeg`
  },
  {
    id: 81,
    image: `${import.meta.env.BASE_URL}images/table81.jpeg`
  },
  {
    id: 82,
    image: `${import.meta.env.BASE_URL}images/table82.jpeg`
  },
  {
    id: 83,
    image: `${import.meta.env.BASE_URL}images/table83.jpeg`
  },
  {
    id: 84,
    image: `${import.meta.env.BASE_URL}images/table84.jpeg`
  },
  {
    id: 85,
    image: `${import.meta.env.BASE_URL}images/table85.jpeg`
  },
  {
    id: 86,
    image: `${import.meta.env.BASE_URL}images/table86.jpeg`
  },
  {
    id: 87,
    image: `${import.meta.env.BASE_URL}images/table87.jpeg`
  },
  {
    id: 88,
    image: `${import.meta.env.BASE_URL}images/table88.jpeg`
  },
  {
    id: 89,
    image: `${import.meta.env.BASE_URL}images/table89.jpeg`
  },
  {
    id: 90,
    image: `${import.meta.env.BASE_URL}images/table90.jpeg`
  },
  {
    id: 91,
    image: `${import.meta.env.BASE_URL}images/table91.jpeg`
  },
  {
    id: 92,
    image: `${import.meta.env.BASE_URL}images/table92.jpeg`
  },
  {
    id: 93,
    image: `${import.meta.env.BASE_URL}images/table93.jpeg`
  },
  {
    id: 94,
    image: `${import.meta.env.BASE_URL}images/table94.jpeg`
  },
  {
    id: 95,
    image: `${import.meta.env.BASE_URL}images/table95.jpeg`
  },
  {
    id: 96,
    image: `${import.meta.env.BASE_URL}images/table96.jpeg`
  }
];

function Furniture() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">Мебель LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {furniture.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={item.image} 
                alt="Мебель LOFT"
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

export default Furniture