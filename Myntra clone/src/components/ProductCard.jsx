// ============================================================
// REAL MYNTRA PRODUCT CARD COMPONENT
// ============================================================
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist } = useCart();

  const isWishlisted = wishlist.includes(product.id);

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      {/* IMAGE CONTAINER */}
      <div className="product-image-container">
        <img src={product.image} alt={product.name} loading="lazy" />

        {/* Signature Myntra Bottom-Left Rating Overlay */}
        {product.rating && (
          <div className="rating-pill">
            <span>{product.rating}</span>
            <i className="bi bi-star-fill"></i>
            <span className="rating-count">{product.ratingCount || "1.2k"}</span>
          </div>
        )}

        {/* Slide-up Action Overlay on Hover */}
        <div className="product-actions-overlay">
          <button
            className={`wishlist-btn-card ${isWishlisted ? "active" : ""}`}
            onClick={handleWishlistClick}
          >
            <i className={isWishlisted ? "bi bi-heart-fill" : "bi bi-heart"}></i>
            {isWishlisted ? "WISHLISTED" : "WISHLIST"}
          </button>
          
          <div className="sizes-container mt-2 text-center">
            Sizes: <span>{product.sizes ? product.sizes.join(", ") : "S, M, L, XL"}</span>
          </div>
        </div>
      </div>

      {/* PRODUCT METADATA */}
      <div className="product-info">
        <div className="product-brand">{product.brand}</div>
        <div className="product-name">{product.name}</div>

        <div className="product-price">
          <span className="price-now">Rs. {product.price}</span>
          <span className="price-original">Rs. {product.originalPrice}</span>
          <span className="price-discount">({product.discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
