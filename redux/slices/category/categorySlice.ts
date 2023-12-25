import { createSlice } from "@reduxjs/toolkit";

import {
  getAllCategories,
  getCategory,
  searchProduct
} from "@/redux/slices/category/categoryAction";
interface CategoryState {
  loadingCategories: boolean;
  loadingCategory: boolean;
  loadingSearch: boolean;
  categories: string[];
  category: any;
  searchList: any;
}
const initialState: CategoryState = {
  loadingCategories: false,
  loadingCategory: false,
  loadingSearch:false,
  categories: [],
  category: [],
  searchList: []

};
export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state, { payload }) => {
      state.loadingCategories = true;
    });
    builder.addCase(getAllCategories.fulfilled, (state, { payload }) => {
      state.loadingCategories = false;
      state.categories = payload;
    });
    builder.addCase(getAllCategories.rejected, (state, { payload }) => {
      state.loadingCategories = false;
    });
    builder.addCase(getCategory.pending, (state, { payload }) => {
      state.loadingCategory = true;
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
    
      state.loadingCategory = false;
      state.category = payload.products;
    });
    builder.addCase(getCategory.rejected, (state, { payload }) => {
      state.loadingCategory = false;
    });
    builder.addCase(searchProduct.pending, (state, { payload }) => {
      state.loadingSearch = true;
    });
    builder.addCase(searchProduct.fulfilled, (state, { payload }) => {
    
      state.loadingSearch = false;
      state.searchList = payload.products;
    });
    builder.addCase(searchProduct.rejected, (state, { payload }) => {
      state.loadingSearch = false;
    });
  },
});
