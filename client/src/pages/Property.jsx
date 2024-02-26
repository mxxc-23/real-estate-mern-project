import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';

const Property = () => {
  const images = [
    "https://i.pinimg.com/564x/ca/e1/81/cae18106efc6156deb3ea857a9c7242e.jpg",
    "https://i.pinimg.com/564x/57/27/32/5727323b42a554b246a385c1635f6a52.jpg",
    "https://i.pinimg.com/564x/1d/fa/13/1dfa1311ac658bd38bf5ab6fecb95206.jpg",
    "https://i.pinimg.com/564x/1d/fa/13/1dfa1311ac658bd38bf5ab6fecb95206.jpg"
  ];

  return (
    <main>
      <Header />
      <section className="flex justify-center">
        <div className="max-w-screen-lg w-full px-6 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-gray-200 rounded-lg shadow-lg p-6" style={{ height: '600px' }}>
            <div className="h-full">
              <Carousel slides={images} />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Property Description</h2>
              <p className="text-gray-700 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis justo et erat accumsan rutrum.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Property;
