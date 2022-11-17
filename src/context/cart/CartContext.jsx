import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeProduct = (id)=>{
    setCart(cart.filter(product=> product.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
