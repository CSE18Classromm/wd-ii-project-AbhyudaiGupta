// ============================================================
// App.jsx – Main App component with React Router setup.
// Pure JavaScript & React implementation.
// ============================================================
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Layout wraps every page with Navbar + Footer
import Layout from "./components/Layout";

// Pages
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

function App() {
  // Global search query shared between Navbar and ProductListing
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout component has Navbar + Footer + Outlet for children */}
        <Route
          path="/"
          element={
            <Layout searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          }
        >
          {/* Default page = Home */}
          <Route index element={<Home />} />

          {/* Category pages – all use the SAME ProductListing component,
              just with a different URL param (:category) */}
          <Route path="/men" element={<ProductListing searchQuery={searchQuery} />} />
          <Route path="/women" element={<ProductListing searchQuery={searchQuery} />} />
          <Route path="/kids" element={<ProductListing searchQuery={searchQuery} />} />

          {/* Dynamic route for Product Details */}
          <Route path="/product/:id" element={<ProductDetail />} />

          {/* Catch-all dynamic route for other categories like beauty, studio */}
          <Route path="/:category" element={<ProductListing searchQuery={searchQuery} />} />

          {/* Cart & Login */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
