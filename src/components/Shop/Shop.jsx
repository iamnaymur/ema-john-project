import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts]= useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>) //?the key is for the better optimization and performance.
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
            </div>
            
        </div>
    );
};
import './Shop.css'
export default Shop;