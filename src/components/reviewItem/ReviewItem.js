import React from 'react';

const ReviewItem = ({ product }) => {
    const { name, price, shipping, quantity } = product;
    return (
        <div>
            <h1> This is {name}</h1>
        </div>
    );
};

export default ReviewItem;