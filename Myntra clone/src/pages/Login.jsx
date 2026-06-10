// ============================================================
// REAL MYNTRA LOGIN & SIGNUP UI
// ============================================================
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `${isLogin ? "Login" : "Signup"} successful. Welcome, ${
        formData.name || formData.email || "User"
      }!`
    );
  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#f5f5f6", minHeight: "calc(100vh - 80px)" }}>
      <div 
        className="mx-auto bg-white overflow-hidden" 
        style={{ 
          maxWidth: "400px", 
          border: "1px solid #eaeaec",
          boxShadow: "0 1px 4px rgba(0,0,0,0.04)"
        }}
      >
        {/* Top visual graphic inspired by Myntra Login view */}
        <div style={{ position: "relative", height: "160px", backgroundColor: "#ffe6ea", overflow: "hidden" }}>
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80" 
            alt="Fashion Header" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient" style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
            <h4 className="text-white fw-bold mb-0">
              {isLogin ? "Login or Signup" : "Join Myntra"}
            </h4>
          </div>
        </div>

        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <span style={{ fontSize: "18px", fontWeight: "700", color: "#282c3f" }}>
              {isLogin ? "Login / Sign up" : "Create Account"}
            </span>
            <button 
              className="btn btn-link text-decoration-none p-0" 
              style={{ fontSize: "13px", color: "#ff3e6c", fontWeight: "700" }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create an account" : "Log in instead"}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-0"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: "12px", fontSize: "14px", borderColor: "#d4d5d9" }}
                />
              </div>
            )}

            <div className="mb-3">
              <input
                type="text"
                name="email"
                className="form-control rounded-0"
                placeholder={isLogin ? "Mobile Number or Email" : "Email Address"}
                value={formData.email}
                onChange={handleChange}
                required
                style={{ padding: "12px", fontSize: "14px", borderColor: "#d4d5d9" }}
              />
            </div>

            {!isLogin && (
              <div className="mb-3">
                <input
                  type="tel"
                  name="phone"
                  className="form-control rounded-0"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ padding: "12px", fontSize: "14px", borderColor: "#d4d5d9" }}
                />
              </div>
            )}

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control rounded-0"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ padding: "12px", fontSize: "14px", borderColor: "#d4d5d9" }}
              />
            </div>

            <div className="mb-4" style={{ fontSize: "12px", color: "#7e818c" }}>
              By continuing, I agree to the <a href="#" style={{ color: "#ff3e6c", fontWeight: "700" }}>Terms of Use</a> & <a href="#" style={{ color: "#ff3e6c", fontWeight: "700" }}>Privacy Policy</a>
            </div>

            <button 
              type="submit" 
              className="btn w-100 fw-bold rounded-0"
              style={{ 
                backgroundColor: "#ff3e6c", 
                color: "#fff", 
                padding: "12px", 
                fontSize: "14px",
                letterSpacing: "0.5px"
              }}
            >
              CONTINUE
            </button>

            <div className="mt-4 text-center" style={{ fontSize: "13px", color: "#535766" }}>
              Having trouble logging in? <a href="#" style={{ color: "#ff3e6c", fontWeight: "700" }}>Get help</a>
            </div>
          </form>
        </div>
        
        <div className="bg-light p-3 text-center border-top">
          <Link to="/" style={{ fontSize: "13px", color: "#282c3f", fontWeight: "600" }}>
            ← Back to Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
