// ============================================================
// REAL MYNTRA BAG / CART PAGE
// ============================================================
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    totalItems,
    totalPrice,
    totalMRP,
  } = useCart();

  const [couponApplied, setCouponApplied] = useState(false);
  
  const discount = totalMRP - totalPrice;
  const couponDiscount = couponApplied ? Math.round(totalPrice * 0.15) : 0;
  const deliveryFee = totalPrice > 799 || totalPrice === 0 ? 0 : 99;
  const finalAmount = totalPrice - couponDiscount + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="container text-center py-5" style={{ minHeight: "500px" }}>
        <div className="my-4">
          <img 
            src="https://constant.myntratassets.com/checkout/assets/img/empty-bag.webp" 
            alt="Empty Bag" 
            style={{ width: "160px", height: "auto" }} 
          />
        </div>
        <h3 className="fw-bold" style={{ color: "#282c3f" }}>Hey, it feels so light!</h3>
        <p style={{ color: "#7e818c", fontSize: "14px" }}>There is nothing in your bag. Let's add some items.</p>
        <Link 
          to="/men" 
          className="btn mt-3 fw-bold" 
          style={{ 
            backgroundColor: "#ff3e6c", 
            color: "#fff", 
            padding: "12px 36px", 
            borderRadius: "2px",
            letterSpacing: "0.5px"
          }}
        >
          ADD ITEMS FROM WISHLIST
        </Link>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4 mb-5" style={{ maxWidth: "1200px" }}>
      {/* AUTHENTIC CHECKOUT PROCESS HEADER */}
      <div className="checkout-header">
        <div className="checkout-steps">
          <span className="active">BAG</span>
          <span className="divider">----------</span>
          <span>ADDRESS</span>
          <span className="divider">----------</span>
          <span>PAYMENT</span>
        </div>
      </div>

      <div className="row g-4 mt-2">
        {/* LEFT: CART ITEMS & OFFERS */}
        <div className="col-12 col-lg-7">
          {/* Offers Box */}
          <div className="offers-box">
            <h6>
              <i className="bi bi-percent" style={{ fontSize: "16px" }}></i> Available Offers
            </h6>
            <ul>
              <li>10% Instant Discount on Standard Chartered Credit & Debit Cards on a min spend of Rs 3,000. TCA</li>
              <li>7.5% Instant Discount on Myntra Kotak Credit Card. Max Discount Up to ₹750 on every spend. TCA</li>
            </ul>
          </div>

          {/* Delivery Note */}
          <div className="d-flex justify-content-between align-items-center p-3 rounded mb-3" style={{ backgroundColor: "#f5f5f6" }}>
            <span style={{ fontSize: "13px", color: "#282c3f" }}>
              <i className="bi bi-truck text-success me-2"></i> Yay! <strong>Free Delivery</strong> on this order.
            </span>
          </div>

          {/* Cart Item Cards */}
          {cart.map((item) => (
            <div key={item.id} className="cart-item-card">
              <button 
                className="cart-item-remove" 
                onClick={() => removeFromCart(item.id)}
                title="Remove item"
              >
                <i className="bi bi-x"></i>
              </button>

              <div className="row g-3">
                <div className="col-3">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                </div>

                <div className="col-9">
                  <div className="cart-item-brand">{item.brand}</div>
                  <div className="cart-item-name">{item.name}</div>

                  {/* Size & Qty triggers */}
                  <div className="size-qty-row">
                    <div className="size-qty-box">
                      Size: {item.selectedSize || item.sizes?.[0] || "M"} <i className="bi bi-chevron-down small"></i>
                    </div>

                    <div className="size-qty-box">
                      Qty: {item.quantity} 
                      <span className="ms-2 d-flex gap-1">
                        <span 
                          onClick={(e) => { e.stopPropagation(); decreaseQty(item.id); }}
                          style={{padding: "0 4px", background:"#fff", borderRadius:"2px"}}
                        >-</span>
                        <span 
                          onClick={(e) => { e.stopPropagation(); increaseQty(item.id); }}
                          style={{padding: "0 4px", background:"#fff", borderRadius:"2px"}}
                        >+</span>
                      </span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="d-flex align-items-baseline gap-2 mt-2">
                    <span style={{ fontSize: "15px", fontWeight: "700", color: "#282c3f" }}>
                      Rs. {item.price * item.quantity}
                    </span>
                    <span style={{ fontSize: "13px", color: "#7e818c", textDecoration: "line-through" }}>
                      Rs. {item.originalPrice * item.quantity}
                    </span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#ff905a" }}>
                      {item.discount}% OFF
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#20bd99", fontWeight: "600", marginTop: "4px" }}>
                    <i className="bi bi-arrow-return-left"></i> 14 days return available
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button 
            className="btn btn-link text-danger p-0 mt-2 text-decoration-none fw-bold" 
            style={{ fontSize: "13px" }}
            onClick={clearCart}
          >
            REMOVE ALL ITEMS
          </button>
        </div>

        {/* RIGHT: COUPONS & PRICE SUMMARY */}
        <div className="col-12 col-lg-5">
          {/* Coupons Section */}
          <div className="coupons-box">
            <h6>Coupons</h6>
            <div 
              className="apply-coupon-btn"
              onClick={() => setCouponApplied(!couponApplied)}
            >
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-tag" style={{ fontSize: "18px" }}></i>
                <span>{couponApplied ? "1 Coupon Applied" : "Apply Coupons"}</span>
              </div>
              
              <button className={`btn btn-sm ${couponApplied ? "text-danger" : "text-danger"} fw-bold p-0`}>
                {couponApplied ? "REMOVE" : "APPLY"}
              </button>
            </div>
            
            {couponApplied && (
              <p className="text-success small fw-bold mt-2 mb-0">
                MYNTRA15 applied! You saved Rs. {couponDiscount}.
              </p>
            )}
          </div>

          {/* Price Summary */}
          <div className="price-summary-box">
            <div className="price-summary-title">
              Price Details ({totalItems} Items)
            </div>

            <div className="summary-line">
              <span>Total MRP</span>
              <span>Rs. {totalMRP}</span>
            </div>

            <div className="summary-line">
              <span>Discount on MRP</span>
              <span style={{ color: "#03a685" }}>- Rs. {discount}</span>
            </div>

            {couponApplied && (
              <div className="summary-line">
                <span>Coupon Discount</span>
                <span style={{ color: "#03a685" }}>- Rs. {couponDiscount}</span>
              </div>
            )}

            <div className="summary-line">
              <span>Platform Fee</span>
              <span style={{ color: "#03a685" }}>FREE</span>
            </div>

            <div className="summary-line">
              <span>Shipping Fee</span>
              <span style={{ color: "#03a685" }}>
                {deliveryFee === 0 ? "FREE" : `Rs. ${deliveryFee}`}
              </span>
            </div>

            <div className="summary-line total">
              <span>Total Amount</span>
              <span>Rs. {finalAmount}</span>
            </div>

            <button 
              className="btn-place-order"
              onClick={() => {
                alert("Order placed successfully! Thank you for shopping with Myntra.");
                clearCart();
                navigate("/");
              }}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
