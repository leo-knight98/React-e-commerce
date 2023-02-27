import React, { useState, useEffect, useContext } from 'react';
import {ProductContext} from './context/ProductContext'
import { ProductProvider } from './context/ProductProvider';
import Content from './components/Content/Content'
import Header from './components/Header/Header'
import MainMenu from './components/MainMenu/MainMenu'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'
import './App.css';
import MiniCart from './components/MiniCart/MiniCart';

function App() {
  return (
  <>
    <ProductProvider>
      <Header />
      <MiniCart />
      <MainMenu />
      <Content />
      <Aside />
      <Footer />
    </ProductProvider>
  </>
  );
}

export default App