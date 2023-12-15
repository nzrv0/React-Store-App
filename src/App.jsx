import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages and components
import { Home, About, Products, SingleProduct, Cart, Error } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
