import { Route, Routes } from "react-router";
import Header from "../widgets/Header/Header";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
