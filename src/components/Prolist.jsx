import React from 'react';

function Prolist() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Titre de la section */}
      <h2 className="text-3xl font-bold text-center mb-10">Explore our latest drops</h2>
      
      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Carte 1 - Off-White */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="p-4">
            <img 
              src="src/assets/Image/s2.png" 
              alt="Off-White Sneakers" 
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Off-White</h3>
            <p className="text-gray-600 mb-2">Out Of Office "Ooo" sneakers</p>
            <p className="text-xl font-bold">$775</p>
          </div>
        </div>

        {/* Carte 2 - Nike */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="p-4">
            <img 
              src="src/assets/Image/s3.png" 
              alt="Nike Air Force" 
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Nike</h3>
            <p className="text-gray-600 mb-2">Nike Air Force Premium</p>
            <p className="text-xl font-bold">$200</p>
          </div>
        </div>

        {/* Carte 3 - Nike */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="p-4">
            <img 
              src="src/assets/Image/s4.png" 
              alt="Nike Air Force" 
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">Nike</h3>
            <p className="text-gray-600 mb-2">Nike Air Force Premium</p>
            <p className="text-xl font-bold">$98.23</p>
          </div>
        </div>

        {/* Carte 4 - Adidas */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
          <div className="p-4">
            <img 
              src="src/assets/Image/s5.png" 
              alt="Adidas Daily Shoes" 
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">adidas</h3>
            <p className="text-gray-600 mb-2">DAILY 3.0 SHOES</p>
            <p className="text-xl font-bold">$98.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prolist;