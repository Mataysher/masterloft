import React, { useEffect } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const computerDesks = [
  { id: 1, image: `${import.meta.env.BASE_URL}images/computerdesk1.jpeg` },
  { id: 2, image: `${import.meta.env.BASE_URL}images/computerdesk2.jpeg` },
  { id: 3, image: `${import.meta.env.BASE_URL}images/computerdesk3.jpeg` },
  { id: 4, image: `${import.meta.env.BASE_URL}images/computerdesk4.jpeg` },
  { id: 5, image: `${import.meta.env.BASE_URL}images/computerdesk5.jpeg` },
  { id: 6, image: `${import.meta.env.BASE_URL}images/computerdesk6.jpeg` },
  { id: 7, image: `${import.meta.env.BASE_URL}images/computerdesk7.jpeg` },
  { id: 8, image: `${import.meta.env.BASE_URL}images/computerdesk8.jpeg` },
  { id: 9, image: `${import.meta.env.BASE_URL}images/computerdesk9.jpeg` },
  { id: 10, image: `${import.meta.env.BASE_URL}images/computerdesk10.jpeg` }
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
