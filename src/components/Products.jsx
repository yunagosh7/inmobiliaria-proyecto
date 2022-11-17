import { useState, useEffect } from 'react';
import { allProducts as fetchData } from '../functions/functions';
import ProductCard from './ProductCard';
import "../styles/Products.css";


const Products = () => {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetchData(setAllProducts)
  }, []);


  return (
    <div className='product-container'>
    {allProducts != null ? (allProducts.map(product=>{
      return (
        <ProductCard title={product.title} id={product.id} price={product.price} image={product.image} key={product.id} product={product} />
      )
    })) : ('Loading products') }
    </div>
  )
}

export default Products