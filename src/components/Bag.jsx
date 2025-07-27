import React, {useState} from 'react';
const Bag =() =>{
    const [items,setItems] = useState([
        {
            
            id: 1,
            brand: 'Nike',
            name: 'Nike Air Force Premium',
            price: 98.23,
            quantity:1,
            image: 'src\assets\Image\s4.png'
        },
        {
            id: 1,
            brand: 'Adidas',
            name: 'DAILY 3.0 SHOES',
            price: 98.23,
            quantity:1,
            image:'src\assets\Image\s5.png'
        }
    ]);
    const updateQuantity = (id,newQuantity) =>{
        setItems(items.map(item => item.id === id ? {...items, quantity: Math.max(1,newQuantity)}:item
    ));
    };
    const removeItem = (id) =>{
        setItems(item.filter(item =>item.id !==id));
    };
    return(
        <div className='max-w-md mx-auto p-4'>
            <h1 className='text-2x1 font-bold mb-6'>Your Bag</h1>
            <div className='space-y-6'>
                {item.map(item=>(
                    <div key={item.id} className='border-b pd-6 last:border-b-0'>
                        <div className='flex justify-between items-start'>
                            <div>
                                <p className='front-semibold'>{item.brand}</p>
                                <p className='text-gray-600'>{item.name}</p>
                                <p className='front-bold mt-1'>${item.price.toFixed(2)}</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <div className='flex items-center border border-gray-300 rounded-md'>
                                        <button className='px-3 py-1 hover:bg-gray-100' onClick={() => ipdateQuantity(item.id,item.quantity -1)}>
                                         -   
                                        </button>
                                        <span className='px-3 py-1 front-medium'>{item.quantity}</span>
                                        <button className='px-3 py-1 hover:bg-gray-100 ' onClick={() => updateQuantity(item.id,item.quantity + 1 )}>
                                            +
                                        </button>
                                    </div>
                                    <button className='text-gray-500 hover:text-red-500' onClick={() => removeItem(item.id)}>
                                        Remove
                                    </button>
                                    </div>
                                </div>
                            </div>
                ))}        
            </div>
        </div>
    );
};



export default Bag