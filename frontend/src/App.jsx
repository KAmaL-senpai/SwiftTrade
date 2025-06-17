import HomePage from "./Landing_Page/Home/HomePage";
import Signup from "./Landing_Page/Auth/Signup";
import Login from "./Landing_Page/Auth/Login";
import AboutPage from "./Landing_Page/About/AboutPage";
import ProductsPage from "./Landing_Page/Products/ProductsPage";
import PricingPage from "./Landing_Page/Pricing/PricingPage";
import SupportPage from "./Landing_Page/Support/SupportPage";
import Navbar from "./Landing_Page/Navbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
