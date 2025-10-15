import React, { useEffect, useState } from "react";
import HomeProducts from "./HomeProducts";
import { useGetProductsQuery } from "../services/productsApi";

const Home = () => {
  const category = ["Groceries", "Sports", "Mobile", "Electronics", "Toys"];
  const [products, setProducts] = useState({});
  const {isLoading,data} = useGetProductsQuery()
  
  useEffect(()=>{
  setProducts(data)
  },[data])

  return (
  <>
    {category.map((c) => (
      <HomeProducts 
        key={c} 
        category={c} 
        products={products?.[c] ?? []} 
      />
    ))}
  </>
);

};

export default Home;
