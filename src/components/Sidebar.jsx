import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-2">
      <ul className="list-unstyled text-center d-flex flex-column mt-5 mb-auto"
          style={{ height: "100vh", position: "fixed", width: "150px" }}>
        <li>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/2ebb95ec20eae8f1.png?q=100" />
          </div>
          <Link className="text-decoration-none text-dark fs-4" to="/products/Groceries">
            Grocery
          </Link>
        </li>
        <li>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/cd6aca4f61e8ea95.png?q=100" />
          </div>
          <Link className="text-decoration-none text-dark fs-4" to="/products/Electronics">
            Electronics
          </Link>
        </li>
        <li>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4d6b13d5a0e0724a.png?q=100" />
          </div>
          <Link className="text-decoration-none text-dark fs-4" to="/products/Mobile">
            Mobiles
          </Link>
        </li>
        <li>
          <div>
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/bat/f/l/4/0-8-pvc-wicket-set-1-tennis-ball-virat-kohli-5-m-f-grade-5-pmg-original-imah52dymn2d5xff.jpeg?q=70&crop=false"
              width="50px" height="50px" />
          </div>
          <Link className="text-decoration-none text-dark fs-4" to="/products/Sports">
            Sports
          </Link>
        </li>
        <li>
          <div>
            <img src="https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3d7144345bbcf2e4.png?q=100" />
          </div>
          <Link className="text-decoration-none text-dark fs-4" to="/products/Toys">
            Kids Toys
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
