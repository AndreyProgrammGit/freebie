import { Route, Routes } from "react-router";
import Header from "../widgets/Header/Header";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../widgets/Footer/Footer";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CartPage from "../pages/CartPage/CartPage";
import Products from "../pages/ProductsPage/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<DetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
