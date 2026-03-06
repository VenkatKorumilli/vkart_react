import React, { useState } from "react";
import { useCheckoutMutation } from "../services/productsApi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [address, setAddress] = useState("");

  const [checkout] = useCheckoutMutation();

  const placeOrder = async () => {

    if (!address) {
      alert("Please enter address");
      return;
    }

    try {

      await checkout({
        userId,
        address
      });

      alert("Order placed successfully");

      navigate("/");

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="container mt-5">

      <h2 className="text-center mb-4">
        Checkout
      </h2>

      <div className="card shadow p-4">

        <div className="mb-3">

          <label className="form-label">
            Delivery Address
          </label>

          <textarea
            className="form-control"
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

        </div>

        <button
          className="btn btn-success"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
};

export default Checkout;