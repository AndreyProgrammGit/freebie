import { Route, Routes } from "react-router";
import Header from "../widgets/Header/Header";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../widgets/Footer/Footer";
import ProductPage from "../pages/ProductPage/ProductPage";
import CartPage from "../pages/CartPage/CartPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
