// ============================================================
// REAL MYNTRA PRODUCT LISTING PAGE
// ============================================================
import { useState, useMemo } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import { products } from "../data/products";

function ProductListing({ searchQuery }) {
  const { category: paramCategory } = useParams();
  const location = useLocation();
  // Detect category from URL path for fixed routes like /men, /women, /kids
  const category = paramCategory || location.pathname.replace("/", "") || null;

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState(10000);
  const [sortBy, setSortBy] = useState("recommended");

  // Filter by category
  const categoryProducts = useMemo(() => {
    if (!category) return products;
    return products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }, [category]);

  // Unique brands list
  const brands = useMemo(() => {
    const unique = [...new Set(categoryProducts.map((p) => p.brand))];
    return unique.sort();
  }, [categoryProducts]);

  // Apply filters + search
  const filteredProducts = useMemo(() => {
    let result = categoryProducts.filter((p) => {
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(p.brand);
      const matchPrice = p.price <= priceRange;
      const matchSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchPrice && matchSearch;
    });

    // Apply Sorting
    if (sortBy === "price_low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "discount") {
      result.sort((a, b) => b.discount - a.discount);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [categoryProducts, selectedBrands, priceRange, searchQuery, sortBy]);

  const pageTitle = category
    ? category.charAt(0).toUpperCase() + category.slice(1) + " Fashion"
    : "All Products";

  return (
    <div className="container-fluid px-4" style={{ maxWidth: "1600px" }}>
      {/* AUTHENTIC BREADCRUMBS */}
      <div className="breadcrumbs">
        <Link to="/">Home</Link> / <span>Clothing</span> / <span>{pageTitle}</span>
      </div>

      {/* HEADER WITH COUNT & SORT */}
      <div className="plp-title-area d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h1 className="plp-title">{pageTitle}</h1>
          <span className="plp-count">- {filteredProducts.length} items</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: "14px", color: "#282c3f", fontWeight: "600" }}>
            Sort by :
          </span>
          <select 
            className="sort-box" 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recommended">Recommended</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="discount">Better Discount</option>
            <option value="rating">Customer Rating</option>
          </select>
        </div>
      </div>

      {/* MAIN CONTAINER: Sidebar + Results Grid */}
      <div className="row g-0">
        {/* SIDEBAR */}
        <div className="col-md-3 col-lg-2 d-none d-md-block">
          <FilterSidebar
            brands={brands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>

        {/* RESULTS GRID */}
        <div className="col-12 col-md-9 col-lg-10 ps-md-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5" style={{ minHeight: "400px" }}>
              <i className="bi bi-search" style={{ fontSize: "48px", color: "#d4d5d9" }}></i>
              <h4 className="mt-3 fw-bold" style={{ color: "#282c3f" }}>We couldn't find any matches!</h4>
              <p style={{ color: "#7e818c" }}>Please check the spelling or try searching for something else</p>
            </div>
          ) : (
            <div className="row g-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-6 col-lg-4 col-xl-3">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
