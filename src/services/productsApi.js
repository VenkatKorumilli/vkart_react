import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),

  endpoints: (build) => ({

    userDetails: build.mutation({
      query: (data) => ({
        url: "/addUser",
        method: "POST",
        body: data
      }),
    }),

    userlogin: build.mutation({
      query: (data) => ({
        url: "/userLogin",
        method: "POST",
        body: data
      })
    }),

    getProducts: build.query({
      query: () => ({
        url: '/homepage'
      })
    }),

    getProductsByCategory: build.query({
      query: (category) => `/products/${category}`
    }),

    getProductById: build.query({
      query: (id) => `/product/${id}`
    }),

    addToCart: build.mutation({
      query: (data) => ({
        url: "/addToCart",
        method: "POST",
        body: data
      })
    }),

    getCart: build.query({
      query: (userId) => `/cart/${userId}`
    }),

    increaseCart: build.mutation({
      query: (data) => ({
        url: "/cart/increase",
        method: "PUT",
        body: data
      })
    }),

    decreaseCart: build.mutation({
      query: (data) => ({
        url: "/cart/decrease",
        method: "PUT",
        body: data
      })
    }),

    removeCartItem: build.mutation({
      query: (data) => ({
        url: "/cart/remove",
        method: "DELETE",
        body: data
      })
    }),

    checkout: build.mutation({
      query: (data) => ({
        url: "/checkout",
        method: "POST",
        body: data
      })
    }),

  }),

})

export const {
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  useGetProductsQuery,
  useUserDetailsMutation,
  useUserloginMutation,
  useAddToCartMutation,
  useGetCartQuery,
  useIncreaseCartMutation,
  useDecreaseCartMutation,
  useRemoveCartItemMutation,
  useCheckoutMutation
} = productsApi