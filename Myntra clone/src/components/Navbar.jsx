// ============================================================
// NAVBAR – With Myntra mega dropdown menus
// ============================================================
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { menMenu, womenMenu, kidsMenu, homeMenu, beautyMenu, genzMenu, headingColors, profileMenu } from "../data/navData";
import myntraLogo from "../assets/myntra-logo.png";

// Map each nav label to its dropdown data and route
const navItems = [
  { label: "MEN", key: "men", menu: menMenu, route: "/men" },
  { label: "WOMEN", key: "women", menu: womenMenu, route: "/women" },
  { label: "KIDS", key: "kids", menu: kidsMenu, route: "/kids" },
  { label: "HOME", key: "home", menu: homeMenu, route: "/men" },
  { label: "BEAUTY", key: "beauty", menu: beautyMenu, route: "/women" },
  { label: "GENZ", key: "genz", menu: genzMenu, route: "/kids" },
];

function Navbar({ searchQuery, setSearchQuery }) {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  // Which dropdown is open
  const [activeMenu, setActiveMenu] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="myntra-navbar">
      <div className="navbar-content">

        {/* LOGO */}
        <Link to="/" className="logo-link" aria-label="Myntra Home">
          <img src={myntraLogo} className="myntra-logo-img" alt="Myntra" />
        </Link>

        {/* NAV LINKS WITH MEGA DROPDOWNS */}
        <div className="nav-links-container">
          {navItems.map((item) => (
            <div
              key={item.key}
              className="nav-item-wrapper"
              onMouseEnter={() => { setActiveMenu(item.key); setProfileOpen(false); }}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div
                className={`nav-link-custom ${item.key} ${activeMenu === item.key ? "active-link" : ""}`}
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </div>

              {/* Colored underline bar */}
              {activeMenu === item.key && (
                <div className="active-bar" style={{ backgroundColor: headingColors[item.key] }}></div>
              )}

              {/* MEGA DROPDOWN */}
              {activeMenu === item.key && item.menu && (
                <div className="mega-dropdown">
                  <div className="mega-dropdown-inner">
                    {item.menu.map((column, colIdx) => (
                      <div key={colIdx} className="mega-col">
                        {column.map((section, secIdx) => (
                          <div key={secIdx} className="mega-section">
                            <h6
                              className="mega-heading"
                              style={{ color: headingColors[item.key] }}
                            >
                              {section.heading}
                            </h6>
                            <ul className="mega-list">
                              {section.items.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <a href="#" onClick={(e) => { e.preventDefault(); setActiveMenu(null); navigate(item.route); }}>
                                    {link}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* STUDIO with NEW badge (no dropdown) */}
          <div className="nav-item-wrapper">
            <div className="nav-link-custom studio" onClick={() => navigate("/men")}>
              STUDIO <span className="studio-new-badge">NEW</span>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-container">
          <svg className="search-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#696b79" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-bar"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* ACTION ICONS */}
        <div className="action-icons-container">

          {/* PROFILE with dropdown */}
          <div
            className="action-item profile-wrapper"
            onMouseEnter={() => { setProfileOpen(true); setActiveMenu(null); }}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>Profile</span>

            {/* Profile active bar */}
            {profileOpen && <div className="profile-active-bar"></div>}

            {/* PROFILE DROPDOWN */}
            {profileOpen && (
              <div className="profile-dropdown">
                <div className="profile-dd-header">
                  <strong>{profileMenu.greeting}</strong>
                  <p>{profileMenu.subtext}</p>
                  <button
                    className="login-signup-btn"
                    onClick={() => { setProfileOpen(false); navigate("/login"); }}
                  >
                    {profileMenu.loginBtn}
                  </button>
                </div>

                <div className="profile-dd-divider"></div>

                <ul className="profile-dd-list">
                  {profileMenu.sections[0].items.map((item, i) => (
                    <li key={i}><a href="#">{item}</a></li>
                  ))}
                  <li>
                    <a href="#">
                      {profileMenu.insiderLabel}
                      <span className="insider-badge">New</span>
                    </a>
                  </li>
                </ul>

                <div className="profile-dd-divider"></div>

                <ul className="profile-dd-list">
                  {profileMenu.sections[1].items.map((item, i) => (
                    <li key={i}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* WISHLIST */}
          <div className="action-item" onClick={() => navigate("/men")}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
            <span>Wishlist</span>
          </div>

          {/* BAG */}
          <div className="action-item" onClick={() => navigate("/cart")}>
            <svg width="20" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 01-8 0"></path>
            </svg>
            <span>Bag</span>
            {totalItems > 0 && <div className="cart-badge">{totalItems}</div>}
          </div>

        </div>
      </div>

      {/* Full-width overlay when any menu is open */}
      {(activeMenu || profileOpen) && <div className="dropdown-overlay"></div>}
    </nav>
  );
}

export default Navbar;
