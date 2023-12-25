import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// slices
import { categorySlice } from "./slices/category/categorySlice";
import { productSlice } from "./slices/product/productSlice";
import { commonSlice } from "./slices/common/commonSlice";
// ----------------------------------------------------------------------

export const createNoopStorage = () => ({
  getItem(_key: string) {
    return Promise.resolve(null);
  },
  setItem(_key: string, value: any) {
    return Promise.resolve(value);
  },
  removeItem(_key: string) {
    return Promise.resolve();
  },
});

export const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["category", "product","common"],
};

export const productPersistConfig = {
  key: "product",
  storage,
  keyPrefix: "redux-",
  whitelist: ["category", "product","common"],
};

const rootReducer = combineReducers({
  category: categorySlice.reducer,
  product: productSlice.reducer,
  common: commonSlice.reducer,
});

export default rootReducer;
