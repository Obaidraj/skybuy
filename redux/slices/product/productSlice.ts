import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts,getProductDetail } from "./productAction";
interface ProductState {
  loadingProduct: boolean;
  loadingProductdetail: boolean;
productDetail:any;
  hasMoreProduct: boolean;
  products: any;
}
const initialState: ProductState = {
  loadingProduct: false,
  loadingProductdetail: false,
  productDetail:{},
  hasMoreProduct: true,
  products: [],
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state, { payload }) => {
      if (state.products.length < 1) {
      state.loadingProduct = true;
      }
    });
    builder.addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.loadingProduct = false;
      if (payload.length < 15) {
        state.hasMoreProduct = false;
      }
   
      if (state.products.length < 1) {

        state.products = payload.products;
      }else{
        state.products = [...state.products, ...payload.products];
      }
    });
    builder.addCase(getAllProducts.rejected, (state, { payload }) => {
      state.loadingProduct = false;
    });
    builder.addCase(getProductDetail.pending, (state, { payload }) => {
      state.loadingProductdetail = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, { payload }) => {
      state.loadingProductdetail = false;
     
      state.productDetail = payload
    });
    builder.addCase(getProductDetail.rejected, (state, { payload }) => {
      state.loadingProductdetail = false;
    });
  },
});
