import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpApi } from '@/utils/api';
import {  enqueueSnackbar } from 'notistack'
export const getAllProducts =createAsyncThunk("/products/by", async (skip:string="0") => {
    try {
        const response = await httpApi.get(`/products?limit=15&skip=${skip}`)
       
       return(response.data)
     } catch (error:any) {
      enqueueSnackbar(error.message ,{ variant: 'error' })
      throw new Error(error.message)
     
     }
})
export const getProductDetail =createAsyncThunk("/products", async (id:string) => {
  try {
      const response = await httpApi.get(`/products/${id}`)
     
     return(response.data)
   } catch (error:any) {
    enqueueSnackbar(error.message ,{ variant: 'error' })
    throw new Error(error.message)
   
   }
})