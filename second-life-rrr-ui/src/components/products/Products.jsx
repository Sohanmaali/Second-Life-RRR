import React, { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";
import BASE_URL from "../../service/Base_URL";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

export default function Products() {
  const navigator = useNavigate();
  const [productData, setProductData] = useState([{}]);
  const [loading, setLoading] = useState(true);

  // setLoading(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL.getScrapProducts)
      .then((response) => {
        // console.log("response data           ", response);
        setProductData(response.data);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        // console.error("Error fetching data:", error);
        toast.error("Server Error");
        setLoading(false);
        navigator("/");
      });
    return;
  }, []);

  return (
    <>
      <section
        className="flex flex-col justify-center  min-h-screen
      px-4 py-10 mx-auto sm:px-6 border "
      >
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <Loader />
          ) : productData && productData.length > 0 ? (
            productData.map((product, index) => (
              // Rendering Product component for each item
              <Product key={index} product={product} />
            ))
          ) : (
            <div>No products found</div>
          )}
        </div>
      </section>
    </>
  );
}
