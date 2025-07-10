import { Route, Routes } from "react-router";
import Header from "../widgets/Header/Header";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import Footer from "../widgets/Footer/Footer";
import ProductPage from "../pages/ProductPage/ProductPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
