import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      
    <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>}/>
      </Routes>
      
        

    </div>
  );
}

export default App;
