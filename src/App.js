import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/ar.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home";
import ProductDetails from "./container/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/item/:id" element={<ProductDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
