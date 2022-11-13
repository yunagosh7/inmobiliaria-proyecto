import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product'


function App() {
  return (
    <div className="App">
      <Navbar/>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </BrowserRouter>
      
        

    </div>
  );
}

export default App;
