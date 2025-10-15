import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store.js'; 
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products/:category",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <ProductPage />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
  path:"/signup",
  element:<Signup></Signup>
  }
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
