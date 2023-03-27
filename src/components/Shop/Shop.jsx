import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([])
    
    const [cart, setCart]=useState([]) //?the initial value for the cart is zero and thats why there is an empty array.

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=> setProducts(data))
    }, [])
    
    const handleAddToCart = (product) => {
        const newCart=[...cart,product]
        setCart(newCart)
        };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product product={product} handleAddToCart={handleAddToCart} key={product.id}></Product>) //?the key is for the better optimization and performance.
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
               
            </div>
            
        </div>
    );
};
import './Shop.css'
export default Shop;