import React from 'react';

function Hero() {
  return (
    <div className="relative bg-[#EAEEEF] w-[1116px] ml-[280px] mt-6 p-6 rounded-xl"> {/* Equivalent à rgba(234, 238, 239) */}
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-4">
        {/* Partie texte */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[rgba(236,94,42,1)] mb-2">25% OFF</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Summer Sale</h1>
          <p className="text-lg text-gray-700 mb-6">Discover our summer styles with discount</p>
          <button className="bg-[#1A1618] hover:bg-black text-white font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition duration-300">
            Shop Now <span className="text-xl">→</span>
          </button>
        </div>

        {/* Partie image */}
        <div className="md:w-1/2 ml-[200px]">
          <img 
            src="src/assets/Image/s1.png" 
            alt="Summer Collection" 
            className="w-[490] h-[321] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;