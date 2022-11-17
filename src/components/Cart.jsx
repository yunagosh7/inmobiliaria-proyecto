import { useContext } from 'react'
import { CartContext } from '../context/cart/CartContext'
import ProductCard from './ProductCard'
import "../styles/Products.css";
import ProductCardInCart from './ProductCardInCart';

const Cart = () => {
    const { cart } = useContext(CartContext)

  return (
    <div className='product-container'>
        
        {cart != null ? (cart.map(product=>{
            return(
                <ProductCardInCart product={product} />
            )
        })) : "No hay productos en el carrito" }
        

    </div>
  )
}

export default Cart