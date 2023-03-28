import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart} from '../../utilities/fakedb';
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
    
    useEffect(() => {
        const storedCart = getShoppingCart();//~getShoppingCart Gives object with id and value
        const savedCart = [];
        // console.log(storedCart)
        //*step 1- get the id
        for (const id in storedCart) {
            //* step 2- get product from products state by using id
            const addedProduct = products.find(product => product.id === id)

            //*step 3- get and add quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //*step 4- add the added product to the saved cart
                savedCart.push(addedProduct)
            }

            // console.log(addedProduct)
            
        }
        //* step 5- set the cart
        setCart(savedCart)
    }, [products]) //?confusion on this dependency
    
    const handleAddToCart = (product) => {
        let newCart=[]; 
        // const newCart = [...cart, product];
        //* if product does not exist in the cart then set quantity =1
        //* if exist update the quantity by 1
        const exists= cart.find(pd=> pd.id===product.id)
        if (!exists) {
            product.quantity = 1;
            newCart=[...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining= cart.filter(pd=> pd.id!==product.id)
            newCart=[...remaining,exists]
        }

        setCart(newCart)
        addToDb(product.id)
        };

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product product={product}
                            handleAddToCart={handleAddToCart}
                            key={product.id}>  //?the key is for the better optimization and performance.
                                </Product>) 
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