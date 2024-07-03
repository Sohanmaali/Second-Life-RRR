import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/products/Products";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductDetail from "./components/products/ProductDetailMain";
import UserDashBoard from "./components/UserDashBoard";
import AddProduct from "./components/products/AddProduct";
import Contact from "./components/Home/Contact";
import Layout from "./components/Layout";
import UserLayout from "./components/UserLayout";
import ForgotPassword from "./components/ForgotPassword";
import ShellProductList from "./components/user/ShellProductList";
import Password from "./components/Password";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />
          <Route path="product-detail/:productId" element={<ProductDetail />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="contact" element={<Contact />} />
          <Route path="my-profile" element={<UserLayout />}>
            <Route index element={<UserDashBoard />} />
            <Route path="shell-product" element={<ShellProductList />} />
            <Route path="change-password" element={<Password />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
