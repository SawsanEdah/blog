import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosErrorHandler from "@util/axiosErrorHandler";

type TFormData = {
  email: string;
  password: string;
};

type TResponse = {
  user: {
    id: number;
    email: string;
    name: string;
    
  };
  accessToken: string;
};

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData: TFormData, thunk) => {
    const { rejectWithValue } = thunk;

    try {
      const res = await axios.post<TResponse>("https://test-front.matrix-erp.sy/api/login", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actAuthLogin;