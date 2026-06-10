// ============================================================
// main.jsx – React Entry Point
// Pure JavaScript & React implementation.
// ============================================================
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Wrap the entire App with CartProvider so every component
        can access the cart state using the useCart() hook */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
