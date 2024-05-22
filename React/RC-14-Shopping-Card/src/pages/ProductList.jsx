import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

import axios from "axios";
const ProductList = () => {
  const BASE_URL = "https://63f4e5583f99f5855db9e941.mockapi.io/products";

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const { data } = await axios(BASE_URL);
      // console.log(data);
      setProducts(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) {
    return <p>Upps! Something went wrong 😏</p>;
  }

  return (
    <div className="container mt-3">
      <div className="d-sm-block d-md-flex">
        {loading ? (
          <p> Loading....</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard key={product.id} />
              ))}
            </article>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
