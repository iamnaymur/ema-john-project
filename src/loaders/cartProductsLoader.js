import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  //* if cart data is in database, you must use async await .
  const storedCart = getShoppingCart();
  const savedCart = [];

  // console.log(storedCart);

  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  //^ if you want to return and send two things or more
  // return [products,savedCart]
  //another option
  //return{products,cart:savedCart}

  
  return savedCart;
};

export default cartProductsLoader;
