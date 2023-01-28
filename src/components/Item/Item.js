import './Item.css';
import React from 'react';

const Item = ({ item }) => {
    const { name, image, description, time } = item;
    return (
        
            <div className='product'>
                <img src={image} alt=""></img>
                <div className="product-info">
                    <p className='product-name'>{name}</p>
                    <p>Time required:{time}</p>
                    <p><small>{description}</small></p>
                </div>
                    <button className='btn'>Add to list</button>
            </div>

    );
};

export default Item;