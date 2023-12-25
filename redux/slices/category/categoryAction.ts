import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpApi } from '@/utils/api';
import {  enqueueSnackbar } from 'notistack'


export const getAllCategories =createAsyncThunk("products/categories", async () => {
 try {
    const response = await httpApi.get("/products/categories")
   return(response.data)
 } catch (error:any) {
  enqueueSnackbar(error.message ,{ variant: 'error' })
  throw new Error(error.message)
 
 }

})
export const getCategory =createAsyncThunk("/products/category", async (category:string) => {
  try {
     const response = await httpApi.get(`/products/category/${category}`)
    return(response.data)
  } catch (error:any) {
   enqueueSnackbar(error.message ,{ variant: 'error' })
   throw new Error(error.message)
  
  }
 
 })
 export const searchProduct =createAsyncThunk("/products/search", async (search:string) => {
  try {
     const response = await httpApi.get(`/products/search?q=${search}`)
    return(response.data)
  } catch (error:any) {
   enqueueSnackbar(error.message ,{ variant: 'error' })
   throw new Error(error.message)
  
  }
 
 })