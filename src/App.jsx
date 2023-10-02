import { Routes, Route, Link, useLocation } from "react-router-dom";

import "./App.css";
import Quiz from "./components/Quiz";
import ProductList from "./components/ProductsList";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <h2 className="m-4 text-lg font-bold text-blue-500" role="button">
        <Link to={isHomePage ? "/survey" : "/"}>
          {isHomePage ? "Survey" : "Home"}
        </Link>
      </h2>

      <Routes>
        <Route path="/survey" element={<Quiz />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
