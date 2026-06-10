// ============================================================
// HOME PAGE – Multiple sections with 60 products
// ============================================================
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, banners, categories } from "../data/products";

function Home() {
  const navigate = useNavigate();
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Organize products
  const menProducts = products.filter((p) => p.category === "men");
  const womenProducts = products.filter((p) => p.category === "women");
  const kidsProducts = products.filter((p) => p.category === "kids");

  const topDeals = products.filter((p) => p.discount >= 50).slice(0, 10);
  const trendingNow = products.filter((p) => p.rating >= 4.4).slice(0, 10);
  const under999 = products.filter((p) => p.price <= 999).slice(0, 10);
  const premiumPicks = products.filter((p) => p.price >= 2000).slice(0, 8);

  return (
    <div className="home-container">
      {/* BANNER CAROUSEL */}
      <div className="home-carousel position-relative" onClick={() => navigate("/men")}>
        <img src={banners[currentBanner].image} alt={banners[currentBanner].title} className="banner-img" />
        <div className="position-absolute" style={{ top:"50%", left:"8%", transform:"translateY(-50%)", color:"#fff", textShadow:"0 2px 10px rgba(0,0,0,0.5)" }}>
          <h1 style={{ fontSize:"56px", fontWeight:"900", letterSpacing:"1px", margin:0 }}>{banners[currentBanner].title}</h1>
          <p style={{ fontSize:"20px", fontWeight:"600", marginTop:"10px", opacity:0.9 }}>{banners[currentBanner].subtitle}</p>
          <button className="btn mt-3" style={{ backgroundColor:"#ff3e6c", color:"#fff", fontWeight:"700", padding:"12px 36px", borderRadius:"2px", fontSize:"16px", letterSpacing:"1px" }}>
            EXPLORE NOW
          </button>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2">
          {banners.map((_, idx) => (
            <div key={idx} onClick={(e) => { e.stopPropagation(); setCurrentBanner(idx); }}
              style={{ width: idx === currentBanner ? "24px" : "8px", height:"8px", borderRadius:"4px", backgroundColor: idx === currentBanner ? "#ff3e6c" : "#fff", transition:"all 0.3s ease", cursor:"pointer" }}
            />
          ))}
        </div>
      </div>

      {/* SHOP BY CATEGORY */}
      <div className="section-heading">Shop By Category</div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-4 justify-content-center">
          {categories.map((cat) => (
            <div key={cat.id} className="col-4 col-md-3 col-lg-2">
              <div className="category-circle-card" onClick={() => navigate(`/${cat.id}`)}>
                <div className="circle-img-wrapper">
                  <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <h6>{cat.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TOP DEALS – 50%+ OFF */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Biggest Deals
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          Flat 50% OFF & more on top brands
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {topDeals.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING NOW */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Trending Now
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          Top rated products loved by customers
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {trendingNow.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* BEST OF MEN */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Best Of Men
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          {menProducts.length} items
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {menProducts.slice(0, 10).map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn" onClick={() => navigate("/men")} style={{ border:"1px solid #ff3e6c", color:"#ff3e6c", fontWeight:"700", padding:"10px 40px", borderRadius:"2px", fontSize:"14px", letterSpacing:"1px" }}>
            VIEW ALL MEN'S
          </button>
        </div>
      </div>

      {/* BEST OF WOMEN */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Best Of Women
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          {womenProducts.length} items
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {womenProducts.slice(0, 10).map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn" onClick={() => navigate("/women")} style={{ border:"1px solid #ff3e6c", color:"#ff3e6c", fontWeight:"700", padding:"10px 40px", borderRadius:"2px", fontSize:"14px", letterSpacing:"1px" }}>
            VIEW ALL WOMEN'S
          </button>
        </div>
      </div>

      {/* UNDER ₹999 */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Under ₹999
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          Budget-friendly picks for every style
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {under999.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* BEST OF KIDS */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Best Of Kids
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          {kidsProducts.length} items
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {kidsProducts.slice(0, 10).map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn" onClick={() => navigate("/kids")} style={{ border:"1px solid #ff3e6c", color:"#ff3e6c", fontWeight:"700", padding:"10px 40px", borderRadius:"2px", fontSize:"14px", letterSpacing:"1px" }}>
            VIEW ALL KIDS'
          </button>
        </div>
      </div>

      {/* PREMIUM PICKS */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        Premium Picks
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          Luxury brands & premium selections
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {premiumPicks.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* ALL REMAINING PRODUCTS */}
      <div className="section-heading" style={{ marginTop:"70px" }}>
        More To Explore
        <div style={{ fontSize:"12px", fontWeight:"600", color:"#7e818c", letterSpacing:"normal", textTransform:"none", marginTop:"4px" }}>
          All {products.length} products
        </div>
      </div>
      <div className="container-fluid px-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-3">
          {products.slice(10, 30).map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 col-xl-2">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* APP DOWNLOAD BANNER */}
      <div className="container-fluid px-4 mt-5 pt-4" style={{ maxWidth:"1600px" }}>
        <div className="row g-0 rounded overflow-hidden" style={{ backgroundColor:"#f5f5f6" }}>
          <div className="col-md-7 p-5 d-flex flex-column justify-content-center">
            <h2 style={{ fontWeight:"800", color:"#282c3f", letterSpacing:"-0.5px" }}>DOWNLOAD THE MYNTRA APP NOW</h2>
            <p style={{ fontSize:"18px", color:"#535766", marginTop:"10px" }}>
              Get Rs. 200 OFF on your first order + Free Shipping! Use Code: <span className="text-danger fw-bold">MYNTRA200</span>
            </p>
            <div className="d-flex gap-3 mt-4">
              <img src="https://constant.myntratassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" style={{ height:"42px", cursor:"pointer" }} />
              <img src="https://constant.myntratassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" style={{ height:"42px", cursor:"pointer" }} />
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block" style={{ background:"url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80') center/cover no-repeat", minHeight:"300px" }} />
        </div>
      </div>
    </div>
  );
}

export default Home;
