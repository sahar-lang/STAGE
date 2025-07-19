import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Div gauche (Logo + Texte) */}
      <div className="flex items-center space-x-2 ml-[100px]">
        <img 
          src="src/assets/Image/Logo.png" 
          alt="Logo SUN.CO" 
          className="h-10 w-10" 
        />
        <p className="font-bold text-xl">SUN.CO</p>
      </div>

      {/* Div droite (Bouton Panier) */}
      <div className="flex items-center space-x-2 mr-[100px] bg-whait-500 border-transparent hover:border-2 hover:border-black border-4 text-black px-4 py-2 rounded-full transition duration-300 cursor-pointer">
        <img 
          src="src/assets/Image/cart.png" 
          alt="Panier" 
          className="h-5 w-5" 
        />
        <p>View Cart</p>
      </div>
    </div>
  );
}

export default Navbar;