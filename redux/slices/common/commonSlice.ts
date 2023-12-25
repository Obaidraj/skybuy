import { createSlice } from "@reduxjs/toolkit";
interface WishlistState {
   
    wishlist: string[];
    cartItems:any
   
  }
  const initialState: WishlistState = {
       
    wishlist: [],
    cartItems:[]
   
  
  }
  export const commonSlice = createSlice({
    name:"common",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
       
            state.wishlist.push(action.payload);
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
            (item:any) => item.id !== action.payload.id
            );
        },
        addtoCart:(state,{payload})=>{
         
    const data={...payload}
    const newArr=[...state.cartItems,data]
    console.log(newArr)
        },
        removefromcart:(state,action)=>{
          state.cartItems = state.cartItems.filter(
            (item:any) => item.id !== action.payload.id
            );
        }

    }
  })
  export const {addToWishlist,removeFromWishlist,addtoCart,removefromcart}=commonSlice.actions;