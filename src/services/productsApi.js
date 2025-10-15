import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
reducerPath:'productsApi',
baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5000"}),
endpoints:(build)=>({
userDetails:build.mutation({
query:(data)=>({
url:"/addUser",
method:"POST",
body:data
}),
}),
userlogin:build.mutation({
query:(data)=>({
url:"/userLogin",
method:"POST",
body:data,
})
}),
getProducts:build.query({
query:()=>({
url:'/homepage'
})
}),
getProductsByCategory:build.query({
query:(category)=>`/products/${category}`
}),
getProductById:build.query({
query:(id)=>`/product/${id}`
}),
getproductsincart:build.mutation({
query:(data)=>({
    
})
})
}),


})

export const {useGetProductsByCategoryQuery,useGetProductByIdQuery,useLazyGetProductByIdQuery,useGetProductsQuery,useUserDetailsMutation,useUserloginMutation} = productsApi

 

