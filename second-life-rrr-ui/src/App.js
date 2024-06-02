import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Sigup from "./components/Sigup";
import ProductDetail from "./components/products/ProductDetailMain";
import UserProfile from "./components/UserProfile";
import AddProduct from "./components/products/AddProduct";
import Contact from "./components/Home/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<Sigup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />

          <Route path="/my-profile" element={<UserProfile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
