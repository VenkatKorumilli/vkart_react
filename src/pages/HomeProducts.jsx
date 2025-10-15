import React from "react";
import { Link } from "react-router-dom";

const HomeProducts = ({products,category}) => {
  return (
    <div className="card home-categories p-3">
      <div className="text-primary fs-3">{category}</div>
<div className="d-flex justify-content-between flex-wrap p-2 gap-1">
  {products?.slice(0, 5).map((product) => (
    <Link
      to={`/product/${product._id}`}
      className="card cardBody text-decoration-none"
      key={product._id}
      style={{ margin: "4px" }}
    >
       <div className="card-body">
                <div className="d-flex justify-content-center">
                  <img
                    src={product.image}
                    className="img-fluid mb-3"
                    style={{ height: "100px"} }
                  ></img>
                </div>
                <div className="card-title fs-5 fw-bold text-start mb-1">
                  {product.name.slice(0, 25)}
                </div>
                <div className="card-text text-start">
                  {product.description.slice(0, 25)}
                </div>
                <div className="d-flex productRating align-items-center gap-1 biStar">
                  {product.rating}
                  <div className="bi bi-star-fill"></div>
                </div>
              <div className="mt-1 mb-3">
                <span className="me-2 product-discountPrice bi bi-currency-rupee">{product.discountPrice}</span>
                <span className="text-decoration-line-through text-start text-secondary bi bi-currency-rupee product-price">{product.price}</span>
              </div>  
              </div>
    </Link>
  ))}
</div>
 </div>
 );
};
export default HomeProducts;

