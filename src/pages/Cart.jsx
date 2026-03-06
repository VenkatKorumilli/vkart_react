import React from "react";
import {
  useGetCartQuery,
  useIncreaseCartMutation,
  useDecreaseCartMutation,
  useRemoveCartItemMutation,
} from "../services/productsApi";
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const { data, refetch } = useGetCartQuery(userId);

  const [increaseCart] = useIncreaseCartMutation();
  const [decreaseCart] = useDecreaseCartMutation();
  const [removeCartItem] = useRemoveCartItemMutation();

  if (!data || data.items.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h3>Your Cart is Empty</h3>
      </div>
    );
  }

  const increase = async (id) => {
    await increaseCart({ userId, productId: id });
    refetch();
  };

  const decrease = async (id) => {
    await decreaseCart({ userId, productId: id });
    refetch();
  };

  const remove = async (id) => {
    await removeCartItem({ userId, productId: id });
    refetch();
  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4 fw-bold">
        Shopping Cart
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-hover shadow text-center align-middle">

          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>

            {data.items.map((item) => {

              const price = item.discountPrice || item.price;

              return (
                <tr key={item._id}>

                  <td className="fw-semibold">
                    {item.productId.name}
                  </td>

                  <td className="text-success fw-bold">
                    ₹ {price}
                  </td>

                  <td>

                    <div className="d-flex justify-content-center align-items-center gap-2">

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => decrease(item.productId._id)}
                      >
                        -
                      </button>

                      <span className="fw-bold">
                        {item.quantity}
                      </span>

                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => increase(item.productId._id)}
                      >
                        +
                      </button>

                    </div>

                  </td>

                  <td>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => remove(item.productId._id)}
                    >
                      Remove
                    </button>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      <div className="d-flex justify-content-between align-items-center mt-4">

        <h4 className="fw-bold">
          Total: ₹ {data.totalAmount}
        </h4>

        <button
          className="btn btn-primary px-4"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
};

export default Cart;