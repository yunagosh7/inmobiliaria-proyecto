import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  

  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addProductToCart = (product) => {
    if (cart.indexOf(product) === -1) {
      console.log(cart.indexOf(product));
      setCart([...cart, product]);
    }
  };

  const removeProduct = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  const getPrice = ()=>{
    setPrice(cart[0].price)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProduct,
        price,
        setPrice,
        getPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
