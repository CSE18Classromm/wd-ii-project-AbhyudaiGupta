// ============================================================
// REAL MYNTRA FOOTER COMPONENT
// ============================================================

function Footer() {
  return (
    <footer className="myntra-footer">
      <div className="container-fluid px-4" style={{ maxWidth: "1600px" }}>
        <div className="row g-4">
          {/* COL 1 */}
          <div className="col-6 col-md-2 footer-col">
            <h6>Online Shopping</h6>
            <ul>
              <li><a href="#">Men</a></li>
              <li><a href="#">Women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home & Living</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Myntra Insider</a></li>
            </ul>

            <h6 className="mt-4">Useful Links</h6>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Corporate Information</a></li>
              <li><a href="#">Whitehat</a></li>
            </ul>
          </div>

          {/* COL 2 */}
          <div className="col-6 col-md-2 footer-col">
            <h6>Customer Policies</h6>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">T&C</a></li>
              <li><a href="#">Terms Of Use</a></li>
              <li><a href="#">Track Orders</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Cancellation</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Grievance Officer</a></li>
            </ul>
          </div>

          {/* COL 3 */}
          <div className="col-12 col-md-4 footer-col">
            <h6>Experience Myntra App on Mobile</h6>
            <div className="d-flex gap-3 mb-4">
              <img 
                src="https://constant.myntratassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" 
                alt="Google Play" 
                style={{ height: "40px" }} 
              />
              <img 
                src="https://constant.myntratassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" 
                alt="App Store" 
                style={{ height: "40px" }} 
              />
            </div>

            <h6>Keep In Touch</h6>
            <div className="d-flex gap-3" style={{ fontSize: "20px", color: "#696e79" }}>
              <i className="bi bi-facebook" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-twitter" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-youtube" style={{ cursor: "pointer" }}></i>
              <i className="bi bi-instagram" style={{ cursor: "pointer" }}></i>
            </div>
          </div>

          {/* COL 4 */}
          <div className="col-12 col-md-4 footer-col">
            <div className="footer-badges">
              <img 
                src="https://constant.myntratassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" 
                alt="100% Original" 
              />
              <div className="footer-badges-text">
                <h7>100% ORIGINAL</h7>
                <p>guarantee for all products at myntra.com</p>
              </div>
            </div>

            <div className="footer-badges mt-3">
              <img 
                src="https://constant.myntratassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" 
                alt="Return Window" 
              />
              <div className="footer-badges-text">
                <h7>Return within 14days</h7>
                <p>of receiving your order</p>
              </div>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#eaeaec", margin: "40px 0 20px" }} />

        {/* BOTTOM METADATA */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ fontSize: "14px", color: "#696e79" }}>
          <div>
            In case of any concern, <a href="#" style={{ color: "#ff3e6c", fontWeight: "700" }}>Contact Us</a>
          </div>
          <div>
            © 2026 www.myntra.com. All rights reserved.
          </div>
          <div>
            A Flipkart Group Company
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
