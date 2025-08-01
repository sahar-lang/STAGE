import React from "react";
const Descrption = () => {
    return (
        <div className=" max-w-4xl mx-auto p-6">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
                <img src ></img>
                </div>
                </div>
                <div className="w-full md:w-1/2">
                <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-2x1 frnt-bold mb-4 text-black">Descrption</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">Energize your look with a fresh take on heritage adidas style. The adidas Daily 3.0 Shoes 
                     cut a classic profile with a modern suede upper. Your walk across campus or commute across 
                     town has never looked or felt this good.</p>
                     <ul className="space-y-3">
                        <li className="flex item-start">
                            <span className="text-gray-700">.regular fit</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-gray-700">.lace closure</span>
                        </li>
                        <li className="flex items-start">
                        <span className="text-gray-700">• Rubber outside with vulcanized look</span>
                        </li>
                        <li className="flex items-start">
                            <span className=" text-gray-700">• Imported</span>
                        </li>
                     </ul>
                 </div>
            </div>
         </div>
     </div>
    );

};
export default Descrption;