import React from 'react'
import { useGetProductByIdQuery } from '../services/productsApi'

const Cart = () => {

  const {isLoading,data} = useGetProductByIdQuery(id)
  console.log(data) 

  return (
    <div>Cart</div>
  )
}

export default Cart