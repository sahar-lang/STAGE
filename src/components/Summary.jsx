import React from 'react'

const OrderSummary = () =>{
    const subtotal = 90.00;
    const shipping = 20.00;
    const tax = 6.00;
    const discount = 6.00;
    const total = subtotal + shipping + tax - discount;
    return (
        <div className='bg-gray-50 p-6 rounded-lg'>
            <h2 className='bg-gray-50 p-6 rounded-lg'>Summary</h2>

            <div className='space-y-4 mb-6'>
                <div className='flex justify-between'>
                    <span className='text-gray-600'> Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-600'> Shipping and delivery</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-gray-600'> Discount</span>
                    <span>-${discount.toFixed(2)}</span>

                </div>
            </div>
            <div className='border-t pt-4 mb-6'>
                <div className='flex justify-between font-bold text-lg'>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>

                </div>
            </div>
            <button className='w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition flex justify-between items-center'>
                <span>Checkout</span>
                <span>→</span>
            </button>
        </div>
    );
};

export default Summary