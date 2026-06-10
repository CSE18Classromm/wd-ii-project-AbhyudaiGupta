// ============================================================
// CartContext – Manages cart state across the entire application.
// Uses React Context API + useReducer-like pattern with useState.
// ============================================================
import { createContext, useState, useEffect, useContext } from "react";

// Create a context object that can be imported by any component
export const CartContext = createContext();

// Custom hook – makes using the context easier in components
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  // Load cart from localStorage (so it persists after refresh)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("myntra_cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("myntra_wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Whenever cart changes, save to localStorage (useEffect example)
  useEffect(() => {
    localStorage.setItem("myntra_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("myntra_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ADD an item to cart (or increase quantity if already present)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // REMOVE an item from cart completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // INCREASE quantity of an item
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // DECREASE quantity of an item (min 1)
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // CLEAR entire cart
  const clearCart = () => setCart([]);

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate total MRP (before discount)
  const totalMRP = cart.reduce(
    (sum, item) => sum + item.originalPrice * item.quantity,
    0
  );

  // Toggle wishlist item
  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  // Provide all of this to the child components
  const value = {
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalItems,
    totalPrice,
    totalMRP,
    wishlist,
    toggleWishlist,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
