// routing setup file
import "./css/App.css"
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
// layout
import FrontendLayout from './layout/FrontendLayout';
// pages..
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import LoginForm from "./sections/LoginForm";
import RegisterForm from "./sections/RegisterForm";
import ForgottenPassword from "./pages/ForgottenPassword";
import ShopPage from "./pages/ShopPage";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<FrontendLayout/> } >
            <Route path={"/" } element={<HomePage/> } />
            <Route path={'/about'} element={<AboutPage/>}   />
            <Route path={'/contact'} element={<ContactPage/>}   />
            <Route path={"/*"} element={<ErrorPage/>} />
            {/* shop page/ all-products page ... */}
            <Route path={'/shop-page'} element={<ShopPage/>} />
            <Route path={'single-product'} element={<SingleProduct/>}  />
            {/* single product page  */}
            <Route path={'/wishlist' } element={<Wishlist/>} />
            <Route path={'/compare'} element={<Compare/>} />
            <Route path={'/cart'} element={<Cart/>} />
            {/* authentication start ......... */}
            <Route path={'/login'} element={<LoginForm/>} />
            <Route path={'/register'} element={<RegisterForm/>}  />
            <Route path={'/forgotten-password'} element={<ForgottenPassword/>}  />
            {/* authentication end.......... */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;