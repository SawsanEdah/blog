import { TPost } from "@customTypes/post";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse=TPost[]
 const actGetPosts=createAsyncThunk(
    "posts/actGetPosts",
    async (_,thunkAPI)=>{
        const {rejectWithValue}=thunkAPI;
        try{
            const response=await axios.get<TResponse>("https://test-front.matrix-erp.sy/api/posts?limit=5?per_page=1")
           console.log(response.data.data)
            return response.data.data
        }catch(error){
            if(axios.isAxiosError(error)){
                return rejectWithValue(error.response?.data.message || error.message)
            }
            else{
                return rejectWithValue("unexpected error")
            }
        }
    }
)

export default actGetPosts