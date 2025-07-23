import React, { useState } from "react";
const Adidas =() =>{
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => setQuantity(q => q + 1);
    const handleDecrease = () => setQuantity => Math.max(1, q - 1);
    
    return(
        <div className ="max-w-md border border-gray-200 rounder-lg p-6 shadow-sm">
            <div>
            <img src="src\assets\Image\s5.png" alt="adidas" className="h-40 object-contain" ></img>
            </div>

            <div className="mb-6">
                <p className="text-sm front-semibold text-gray-600">Adidas</p>
                <h2 className="text-xl front-bold   text-gray-600 md-2">Daily 3.0 Shoes</h2>
            </div>

            <p className =" text-2xl front-bold ">$98.99</p>

            <div className="mb-6">
                <p className ="text-sm front-semibold text-gray-600 mb-2">Quantity</p>
                <div className="flex items-center border border-gray-300 rounded-md w-32"></div>

                <button
                    onClick={handleDecrease}  className="px-3 py-1 text-lg hover:bg-gray-100 transition">- </button> 
                <span className="flex-1 text-center px-3 py-1">{quantity}</span>
                <button onClick={handleIncrease} className="px-3 py-1 text-lg hover:bg-gray-100 transition">+</button>

            </div>
            <button className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-700 transition"> Add to Cart</button>
        </div>
         
    

    )

}
export default Adidas;