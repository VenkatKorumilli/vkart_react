import { createSlice } from "@reduxjs/toolkit";

const initialState = {
count:0
}

export const cartSlice = createSlice({
name:"cartS",
initialState,
addToCart:(state,action)=>{
state.count+1
}
})

