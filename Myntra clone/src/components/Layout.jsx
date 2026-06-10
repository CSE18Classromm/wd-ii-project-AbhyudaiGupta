// ============================================================
// Layout Component – Wraps every page with Navbar + Footer.
// This avoids repeating Navbar/Footer in every page file.
// ============================================================
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ searchQuery, setSearchQuery }) {
  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <main style={{ minHeight: "60vh" }}>
        {/* Child routes (Home, Men, Women, Kids, etc.) will render here */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
