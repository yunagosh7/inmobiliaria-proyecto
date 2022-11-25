import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import Product from "./components/Product";
import { CartContextProvider } from "./context/cart/CartContext";
import Cart from "./components/Cart";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/info" element={<Info/>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
