import axios from "axios"; 

const allProducts = async ()=>{
    const products = await axios.get('https://fakestoreapi.com/products');
    console.log(products.data)
}

export {
    allProducts
}