const BASE_URL = {
  userLogin: "http://localhost:8080/auth/login",
  addUser: "http://localhost:8080/auth/add-user",
  logoutUser: "http://localhost:8080/logout",
  changePassword: "http://localhost:8080/auth/user/changePassword",

  // ScrapProduct
  getScrapProducts: "http://localhost:8080/auth/get-scrap-products",
  addScrapProducts: "http://localhost:8080/auth/user/add-scrap-product",
  deleteScrapProduct: "http://localhost:8080/auth/user/delete-scrap-product",

  // categories
  getAllcategories: "http://localhost:8080/auth/user/get-product-categories",
};

export default BASE_URL;
