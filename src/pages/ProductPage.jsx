import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetProductByIdQuery, useLazyGetProductByIdQuery } from '../services/productsApi';

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [getProduct] = useLazyGetProductByIdQuery()
  const {isLoading,data} = useGetProductByIdQuery(id);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   fetch(`http://localhost:5000/product/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data));
  // }, [id]);

    useEffect(()=>{
    setProduct(data)
    getProduct()
    },[data])


  if (!product) return <div>Loading...</div>;

  return (
    <div className='card product-page-main'>
      <div className='d-flex align-items-start justify-content-center p-5'>
        <div className='me-5'>
          <img src={product.image} className='img-fluid' width={"500px"} />
        </div>
        <div>
          <div className='fs-2 fw-bold'>{product.name}</div>
          <div className='fs-5'>{product.description}{product.highlights}</div>
          <div className="d-flex productRating align-items-center gap-1 biStar">{product.rating}
            <div className="bi bi-star-fill"></div>
          </div>
          <div className="mt-1 mb-3">
            <span className="me-2 product-discountPrice fs-4 bi bi-currency-rupee">{product.discountPrice}</span>
            <span className="text-decoration-line-through fs-5 text-start text-secondary bi bi-currency-rupee product-price">{product.price}</span>
          </div>

          {product.category === "Groceries" && (
            <>
              <div className='d-flex align-items-center mb-1'>
                <div className='fs-4 fw-bold me-1'>Specifications : </div>
                <div className='fs-5'>{product?.specifications?.general?.type + ","}</div>
                <div className='fs-5'>{product?.specifications?.general?.weight}</div>
              </div>
              <div className='d-flex align-items-center mb-1'>
                <div className='fs-4 fw-bold me-1'>Nutrition : </div>
                <div className='fs-5'>{product?.specifications?.nutrition?.calories + ","}</div>
                <div className='fs-5'>{product?.specifications?.nutrition?.protein + ","}</div>
                <div className='fs-5'>{product?.specifications?.nutrition?.carbohydrates + ","}</div>
                <div className='fs-5'>{product?.specifications?.nutrition?.fat}</div>
              </div>
            </>
          )}
          <button className='btn buynow-btn fs-5 text-light'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
