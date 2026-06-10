// ============================================================
// REAL MYNTRA PRODUCT DETAIL PAGE (PDP)
// ============================================================
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "M");
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h3 className="fw-bold">Product not found</h3>
        <Link to="/" className="btn btn-dark mt-3">Back to Home</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  const handleCheckPincode = () => {
    if (pincode.length === 6) {
      setDeliveryStatus({
        success: true,
        message: `Delivery available for ${pincode}. Standard delivery by ${
          new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })
        }`
      });
    } else {
      setDeliveryStatus({
        success: false,
        message: "Please enter a valid 6-digit PIN code"
      });
    }
  };

  const handleAddBag = () => {
    addToCart({ ...product, selectedSize });
  };

  return (
    <div className="container-fluid px-4 my-4" style={{ maxWidth: "1600px" }}>
      {/* BREADCRUMBS */}
      <div className="breadcrumbs" style={{ marginTop: 0 }}>
        <Link to="/">Home</Link> / <Link to={`/${product.category}`}>{product.category}</Link> / <span>{product.brand}</span>
      </div>

      <div className="row g-5 mt-2">
        {/* LEFT: AUTHENTIC MYNTRA 2-COLUMN IMAGE GRID */}
        <div className="col-12 col-md-7">
          <div className="pdp-image-grid">
            {(product.images || [product.image, product.image]).map((imgUrl, idx) => (
              <div key={idx} className="pdp-image-item">
                <img src={imgUrl} alt={`${product.name} view ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO & ACTION INTERFACE */}
        <div className="col-12 col-md-5 ps-md-4">
          <h1 className="pdp-brand">{product.brand}</h1>
          <h2 className="pdp-name">{product.name}</h2>

          {/* Customer Ratings Pill */}
          {product.rating && (
            <div className="pdp-rating-box">
              <span>{product.rating}</span>
              <i className="bi bi-star-fill"></i>
              <span style={{ color: "#d4d5d9" }}>|</span>
              <span style={{ color: "#535766", fontWeight: "400" }}>
                {product.ratingCount || "1.2k"} Ratings
              </span>
            </div>
          )}

          <hr style={{ borderColor: "#eaeaec", margin: "10px 0" }} />

          {/* Pricing Section */}
          <div className="pdp-price-area">
            <span className="pdp-price-now">Rs. {product.price}</span>
            <span className="pdp-price-original">Rs. {product.originalPrice}</span>
            <span className="pdp-price-discount">({product.discount}% OFF)</span>
            <span className="tax-label">inclusive of all taxes</span>
          </div>

          {/* Size Selector */}
          <div>
            <div className="size-header">
              <h5>SELECT SIZE</h5>
              <span className="size-chart-link">SIZE CHART</span>
            </div>

            <div className="size-buttons-container">
              {(product.sizes || ["S", "M", "L", "XL", "XXL"]).map((sz) => (
                <div
                  key={sz}
                  className={`size-btn ${selectedSize === sz ? "selected" : ""}`}
                  onClick={() => setSelectedSize(sz)}
                >
                  {sz}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons-area">
            <button className="btn-add-bag" onClick={handleAddBag}>
              <i className="bi bi-bag"></i> ADD TO BAG
            </button>
            <button 
              className="btn-pdp-wishlist"
              onClick={() => toggleWishlist(product.id)}
            >
              <i className={isWishlisted ? "bi bi-heart-fill text-danger" : "bi bi-heart"}></i> 
              {isWishlisted ? "WISHLISTED" : "WISHLIST"}
            </button>
          </div>

          {/* Delivery Check Section */}
          <div className="delivery-options-box">
            <div className="delivery-title">
              <i className="bi bi-truck" style={{ fontSize: "20px" }}></i> DELIVERY OPTIONS
            </div>

            <div className="pincode-input-group">
              <input
                type="text"
                className="pincode-input"
                placeholder="Enter pincode"
                maxLength="6"
                value={pincode}
                onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              />
              <button className="pincode-check-btn" onClick={handleCheckPincode}>
                Check
              </button>
            </div>

            {deliveryStatus && (
              <p className={`small ${deliveryStatus.success ? "text-success" : "text-danger"} fw-bold`}>
                {deliveryStatus.message}
              </p>
            )}

            <p style={{ fontSize: "12px", color: "#696e79" }}>
              Please enter PIN code to check delivery time & Pay on Delivery Availability
            </p>

            <ul className="delivery-features-list mt-3">
              <li><i className="bi bi-check-circle" style={{color:'#03a685'}}></i> 100% Original Products</li>
              <li><i className="bi bi-check-circle" style={{color:'#03a685'}}></i> Pay on delivery might be available</li>
              <li><i className="bi bi-check-circle" style={{color:'#03a685'}}></i> Easy 14 days returns and exchanges</li>
              <li><i className="bi bi-check-circle" style={{color:'#03a685'}}></i> Try & Buy might be available</li>
            </ul>
          </div>

          {/* Best Offers */}
          <div className="delivery-options-box">
            <div className="delivery-title">
              <i className="bi bi-tag" style={{ fontSize: "20px" }}></i> BEST OFFERS
            </div>
            
            <div className="p-3 rounded" style={{ backgroundColor: "#ffffff", border: "1px solid #eaeaec" }}>
              <h6 style={{ fontSize: "14px", fontWeight: "700", color: "#282c3f" }}>
                Best Price: <span style={{ color: "#ff3e6c" }}>Rs. {Math.round(product.price * 0.85)}</span>
              </h6>
              <ul style={{ fontSize: "13px", color: "#535766", paddingLeft: "16px", margin: "8px 0 0" }}>
                <li>Applicable on: Orders above Rs. 1099 (only on first purchase)</li>
                <li>Coupon code: <strong style={{ color: "#282c3f" }}>MYNTRA15</strong></li>
                <li>Coupon Discount: 15% off (check cart for final savings)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
