import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./act/actGetPosts";
import { TPost } from "@customTypes/post";
import { TLoading } from "@customTypes/shared";

interface IPostsState{
    records:TPost[],
    loading : TLoading,
    error :string | null
}

const initialState:IPostsState={
    records : [],
    loading : "idle",
    error : null
}
const postsSlice=createSlice({
    name:"posts",
    initialState,
    reducers : {},
    extraReducers:(builder)=>{
        builder.addCase(actGetPosts.pending, (state)=>{
            state.loading="pending"
            state.error=null
        })
        builder.addCase(actGetPosts.fulfilled, (state,action)=>{
            state.loading="succeeded"
            state.records=action.payload
        })
        builder.addCase(actGetPosts.rejected, (state,action)=>{
            state.loading="failed"
            if(action.payload && typeof action.payload === "string"){
                state.error=action.payload
            }
            
        })
    }
})

export {actGetPosts};
export default postsSlice.reducer;