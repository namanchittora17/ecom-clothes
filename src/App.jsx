import react from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import  About  from './components/About';
import Contact from './components/Contact';
import Cart from './components/cart';


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
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
