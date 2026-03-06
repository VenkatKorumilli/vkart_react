import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAddToCartMutation, useGetProductByIdQuery } from "../services/productsApi";

const ProductPage = () => {

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const { data } = useGetProductByIdQuery(id);
  const [addToCart] = useAddToCartMutation();

  useEffect(() => {
    setProduct(data);
  }, [data]);

  const handleAddToCart = async () => {

    const userId = localStorage.getItem("userId");

    await addToCart({
      userId,
      productId: product._id,
      price: product.price,
      discountPrice: product.discountPrice,
    });

    alert("Added To Cart");
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="card product-page-main">
      <div className="d-flex align-items-start justify-content-center p-5">

        <div className="me-5">
          <img src={product.image} className="img-fluid" width={"500px"} />
        </div>

        <div>

          <div className="fs-2 fw-bold">{product.name}</div>
          <div className="fs-5">{product.description}</div>

          <div className="d-flex productRating align-items-center gap-1 biStar">
            {product.rating}
            <div className="bi bi-star-fill"></div>
          </div>

          <div className="mt-1 mb-3">
            <span className="me-2 product-discountPrice fs-4 bi bi-currency-rupee">
              {product.discountPrice}
            </span>
            <span className="text-decoration-line-through fs-5 text-start text-secondary bi bi-currency-rupee product-price">
              {product.price}
            </span>
          </div>

          <button
            className="btn buynow-btn fs-5 text-light"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;