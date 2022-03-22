import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='Product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='Product-name'>{name}</p>
                <p>Price : $ {price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;