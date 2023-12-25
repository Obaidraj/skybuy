import { createSlice } from "@reduxjs/toolkit";
interface WishlistState {
   
  cartItems:any
    wishlist: string[];
    
   
  }
  const initialState: WishlistState = {
       
    wishlist: [],
    cartItems:[],
   
  
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
  
    state.cartItems=[...state.cartItems,payload]

        },
        removefromcart:(state,action)=>{
          state.cartItems = state.cartItems.filter(
            (item:any) => item.id !== action.payload.id
            );
        },
        edititemincart:(state,action)=>{
          
        }

    }
  })
  export const {addToWishlist,removeFromWishlist,addtoCart,removefromcart}=commonSlice.actions;