import axios from "axios"; 

const allProducts = async (setState)=>{
    const products = await axios.get('https://fakestoreapi.com/products');
    console.log(products.data)
    setState(products.data)
}

const oneProduct = async (setState,id)=>{
    const product = await axios.get(`https://fakestoreapi.com/products/${id}`)
    setState(product.data)
}

export {
    allProducts,
    oneProduct
}