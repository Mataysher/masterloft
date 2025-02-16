import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const shelves = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80"
  }
];

function Shelves() {
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