import React, {useState} from 'react';
const Bag =() =>{
    const [items,setItems] = useState([
        {
            id: 1,
            brand: 'Nike',
            name: 'Nike Air Force Premium',
            price: 98.23,
            quantity:1
        },
        {
            id: 1,
            brand: 'Adidas',
            name: 'DAILY 3.0 SHOES',
            price: 98.23,
            quantity:1
        }
    ]);
    const updateQuantity = (id,newQuantity) =>{
        setItems(items.map(item => item.id === id ? {...items, quantity: Math.max(1,newQuantity)}:item
    ));
    };
}

function Bag() {
  return (
    <div>Bag</div>
  )
}

export default Bag