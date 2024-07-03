import React, { useEffect, useState } from "react";
import {
  fetchScrapProductData,
  removeScrapProduct,
} from "../../features/scrapProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ShellProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { scrapProductDetails, error } = useSelector(
    (state) => state.scrapProduct
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All products");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(fetchScrapProductData());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      navigate("/");
    }
  }, [error, navigate]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset to the first page when filter changes
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when search query changes
  };

  const filteredItems = scrapProductDetails.filter((product) => {
    const matchesFilter =
      filter === "All products" ||
      (filter === "Rejected Product" && product.status === "REJECT") ||
      (filter === "Shell Product" && product.category === "shell");

    const matchesSearchQuery = product.productName
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearchQuery;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const removeProduct = (id) => {
    dispatch(removeScrapProduct(id));
  };

  return (
    <>
      <div className="">
        <div className="pb-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-40 mr-4">
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
                    value={filter}
                    onChange={handleFilterChange}
                  >
                    <option value="All products">All products</option>
                    <option value="Rejected Product">Rejected Product</option>
                    <option value="Shell Product">Shell Product</option>
                  </select>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-3 py-3">
                      Sn
                    </th>
                    <th scope="col" className="px-16 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" colSpan={2} className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems && currentItems.length > 0 ? (
                    currentItems.map((product, index) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-5 gap-y-5"
                        key={index}
                      >
                        <td className="px-3 py-4"> {index + 1}</td>
                        <td className="p-4 text-center">
                          <Link to={`/product-detail/${product.id}`}>
                            <img
                              src={product.thumbnail}
                              className="h-20 w-12"
                              alt="Product"
                            />
                          </Link>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {product.productName}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            {new Date(product.date).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {`₹ ${product.shippingCost}`}
                        </td>
                        <td className="px-6 py-4">
                          {product.status === "PENDING" ? (
                            <button
                              onClick={() => removeProduct(product.id)}
                              className="font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          ) : (
                            <Link
                              to={`/product-detail/${product.id}`}
                              className="font-medium text-white hover:underline"
                            >
                              View
                            </Link>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 py-5">
                      <td
                        colSpan="6"
                        className="px-6 py-4 text-center text-gray-500 dark:text-gray-400"
                      >
                        No products found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center mt-10">
              <button
                className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium text-gray-900 transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </span>
              </button>
              <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                &nbsp; &nbsp; Page{" "}
                <strong className="text-gray-900">{currentPage}</strong> of
                <strong className="text-gray-900"> {totalPages}</strong>
                &nbsp; &nbsp;
              </p>
              <button
                className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium text-gray-900 transition-all hover:opacity-75 focus:ring active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
