import { configureStore } from "@reduxjs/toolkit";
import { LoginReducers } from "../Slice/LoginSlice";
import UserReducer from "../Slice/UserSlice";

const Store = configureStore({
  reducer: {
    Login: LoginReducers,
    User: UserReducer
  }
})


export default Store