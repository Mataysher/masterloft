import { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const tvStands = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/tumba1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/tumba2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/tumba3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/tumba4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/tumba5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/tumba6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/tumba7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/tumba8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/tumba9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/tumba10.jpeg` },
  { id: 11, image: `${import.meta.env.BASE_URL}images/tumba11.jpeg` },
  { id: 12, image: `${import.meta.env.BASE_URL}images/tumba12.jpeg` }
];

function TVStands() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">ТВ тумбы LOFT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tvStands.map((stand) => (
            <div 
              key={stand.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={stand.image} 
                alt="ТВ тумба LOFT"
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

export default TVStands;
