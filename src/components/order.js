import React from 'react'
import './order.css'
import { useState } from 'react';

const Order = () => {
    const [orderItems, setOrderItems] = useState([]);
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 15 },
        { id: 3, name: 'Product 3', price: 20 },
    ];
    const addToOrder = (product) => {
        setOrderItems([...orderItems, product]);
    };
    const calculateTotal = () => {
        return orderItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div id="color-bg">
            <div class="order-head">
                <h1>Your Orders</h1>
                <input type="text" name="name" id="name"></input>
                <button>Search</button>
            </div>
            <div class="order-products">
                <h2>Available Products</h2>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name} - ${product.price}{' '}
                            <button onClick={() => addToOrder(product)}>Add to Order</button>
                            <details><p>delivery date:within 24 hours of your order</p><p>Cash on delivery available</p></details>
                        </li>
                    ))}
                </ul>
            </div>

            <div class="product-total">
                <h2>Your Order</h2>
                <ul>
                    {orderItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                        </li>
                    ))}
                </ul>
                <p>Total: ${calculateTotal()}</p>
            </div>
        </div>
    );
}

export default Order;
