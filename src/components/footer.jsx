import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        {/* Div gauche (Logo + Texte) */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img 
            src="src/assets/Image/Logo.png" 
            alt="Logo SUN.CO" 
            className="h-10 w-10" 
          />
          <p className="font-bold text-xl text-white">SUN.CO</p>
        </div>

        {/* Texte du milieu - Centré */}
        <div className="mb-4 md:mb-0">
          <p className="text-gray-400 text-center">© 2023 dot.cards text task. All rights reserved</p>
        </div>

        {/* Div droite (Icônes réseaux sociaux) */}
        <div className="flex space-x-4">
          <a 
            href="#" 
            className="text-white hover:text-pink-600 transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="text-white hover:text-red-600 transition-colors duration-300"
            aria-label="YouTube"
          >
            <FaYoutube className="w-6 h-6 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;