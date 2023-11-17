import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Productdetail from "../pages/Productdetail";
import Checkout from "../pages/Checkout";
import Thankyou from "../pages/Thankyou";
import Myaccount from "../pages/Myaccount";
import Ordertrack from "../pages/Ordertrack";
import Contactus from "../pages/Contactus";
import Aboutus from "../pages/Aboutus";


const Routers = () => {
    return (
<Router>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/wishlist" element={<Wishlist />} />
  <Route path="/productdetail" element={<Productdetail />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/thankyou" element={<Thankyou />} />
  <Route path="/account" element={<Myaccount />} />
  <Route path="/track" element={<Ordertrack />} />
  <Route path="/contactus" element={<Contactus />} />
  <Route path="/aboutus" element={<Aboutus />} />
  {/* Add more routes as needed */}
</Routes>
</Router>
    );
  };
  
  export default Routers;
  