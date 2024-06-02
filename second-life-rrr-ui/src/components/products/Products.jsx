import React, { useState } from "react";
import Product from "./Product";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchScrapProductData } from "../../features/scrapProductSlice";

export default function Products() {
  // const navigator = useNavigate();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { scrapProductDetails, loading, error } = useSelector(
    (state) => state.scrapProduct
  );

  useEffect(() => {
    dispatch(fetchScrapProductData());
    console.log("scrapProductDetails  ", scrapProductDetails);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <>
      <section
        className="flex flex-col justify-center  min-h-screen
      px-4 py-10 mx-auto sm:px-6 border "
      >
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <Loader />
          ) : scrapProductDetails && scrapProductDetails.length > 0 ? (
            scrapProductDetails.map((product, index) => (
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
