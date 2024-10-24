import { configureStore } from '@reduxjs/toolkit'
import posts from "@store/posts/postsSlice"
import auth from "./auth/authSlice";
export const store=configureStore({reducer : {posts,auth}})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch