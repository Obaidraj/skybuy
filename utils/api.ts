import axios from 'axios';
import { AxiosError } from 'axios';


export const httpApi = axios.create(
     {
        baseURL: "https://dummyjson.com",
      },
)




export interface ApiErrorData {
  message: string;
}

 class ApiError<T> extends Error {
    options?: T;
  
    constructor(message: string, options?: T) {
      super(message);
      this.options = options;
    }
  }

