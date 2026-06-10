// ============================================================
// REAL MYNTRA FILTER SIDEBAR COMPONENT
// ============================================================

function FilterSidebar({ brands, selectedBrands, setSelectedBrands, priceRange, setPriceRange }) {
  const handleBrandChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setPriceRange(10000);
  };

  return (
    <aside className="filter-sidebar">
      {/* HEADER */}
      <div className="filter-header">
        <h5>FILTERS</h5>
        {(selectedBrands.length > 0 || priceRange < 10000) && (
          <button className="clear-btn" onClick={clearFilters}>
            CLEAR ALL
          </button>
        )}
      </div>

      {/* CATEGORIES SECTION */}
      <div className="filter-section">
        <div className="filter-section-title">Categories</div>
        <label className="custom-checkbox">
          <input type="checkbox" defaultChecked />
          <span>Apparel</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span>Footwear</span>
        </label>
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span>Accessories</span>
        </label>
      </div>

      {/* BRAND SECTION */}
      <div className="filter-section">
        <div className="filter-section-title">Brand</div>
        <div style={{ maxHeight: "220px", overflowY: "auto" }}>
          {brands.map((brand) => (
            <label key={brand} className="custom-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE RANGE SECTION */}
      <div className="filter-section" style={{ borderBottom: "none" }}>
        <div className="filter-section-title">Price Range</div>
        <input
          type="range"
          className="form-range"
          min="500"
          max="10000"
          step="500"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
        />
        <div className="d-flex justify-content-between mt-2" style={{ fontSize: "13px", color: "#535766" }}>
          <span>Rs. 500</span>
          <span style={{ fontWeight: "700", color: "#282c3f" }}>Rs. {priceRange}</span>
        </div>

        {/* Static Pricing Options for the Myntra check aesthetic */}
        <div className="mt-3">
          <label className="custom-checkbox">
            <input 
              type="checkbox" 
              checked={priceRange <= 1500}
              onChange={() => setPriceRange(1500)}
            />
            <span>Rs. 500 to Rs. 1500</span>
          </label>
          <label className="custom-checkbox">
            <input 
              type="checkbox" 
              checked={priceRange > 1500 && priceRange <= 3000}
              onChange={() => setPriceRange(3000)}
            />
            <span>Rs. 1500 to Rs. 3000</span>
          </label>
          <label className="custom-checkbox">
            <input 
              type="checkbox" 
              checked={priceRange > 3000}
              onChange={() => setPriceRange(10000)}
            />
            <span>Rs. 3000 to Rs. 10000</span>
          </label>
        </div>
      </div>
    </aside>
  );
}

export default FilterSidebar;
