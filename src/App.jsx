import react from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import  About  from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Product1 from './components/product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Product4 from './components/Product4';
import Product5 from './components/Product5';
import Product6 from './components/Product6';
import Product7 from './components/Product7';
import Product8 from './components/Product8';
import Product9 from './components/Product9';
import Product10 from './components/Product10';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      < Header/>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/tweed-blazer' element={<Product1/>}/>
         <Route path='/ivory-shirt' element={<Product2/>}/>
         <Route path='/cream-chinos' element={<Product3/>}/>
         <Route path='/breasted-coat' element={<Product4/>}/>
         <Route path='/silk-tie' element={<Product5/>}/>
         <Route path='/casio-watch' element={<Product6/>}/>
         <Route path='/bag' element={<Product7/>}/>
         <Route path='/birkenstock-arizona' element={<Product8/>}/>
         <Route path='/poplin-shirt' element={<Product9/>}/>
         <Route path='/cropped-trousers' element={<Product10/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
