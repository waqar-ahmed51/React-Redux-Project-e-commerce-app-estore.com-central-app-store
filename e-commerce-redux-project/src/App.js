// Clone of the React State-Props based estore e-commerce app - Redux Implementing (Making state centralized)
import React, { Component } from 'react';
import "./App.css";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductView from "./pages/ProductView";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import DataAPI from './pages/DataAPI';
import ErrorPage from "./pages/ErrorPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchResult from './pages/SearchResult';
import styled from "styled-components";


const PopMessage = styled.div`
/* Some proporties will be triggered from JS functions */
  margin: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  height: 30px;
  position: fixed;
  left: 590px;
  z-index: 50;
  width: 30vw;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <PopMessage id="popMessage" ></PopMessage>
      <Routes>
          <Route path="/" element={<Home />} />

          {/* Same link for github pages */}
          <Route path="/React-Redux-Project-e-commerce-app-estore.com-central-app-store/" element={<Home/>} />

          <Route path="/productlist/:category" element={<ProductList />} />
          <Route path="/productview/:id" element={<ProductView />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dataapi" element={<DataAPI />} />
          <Route path="/searchresult/:keyword" element={<SearchResult />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    );
  }
}
 
export default App;