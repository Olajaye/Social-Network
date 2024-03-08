import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateUserWithEmailAndPassword, LogInWithEmailAndPassword, auth, saveNewUserToDatabase } from "../../FirebaseConfig/Firebase";


const initialState = {
  logedInUser: {},
  isLoading: false,
  error: ""
}

export const createWithEmailAndPassWord = createAsyncThunk('user/createWithEmailAndPassWord', async (NewUser) => {
  const { email, password } = NewUser
  const { user } = await CreateUserWithEmailAndPassword(email, password);
  console.log(user)
  await saveNewUserToDatabase([{ ...NewUser, userId: user.id }])
  return { ...NewUser, userId: user.id }
})

export const LoginWithEmailAndPassWord = createAsyncThunk('user/LoginWithEmailAndPassWord', async (loginInput) => {
  const { email, password } = loginInput
  try {
    const user = await LogInWithEmailAndPassword(email, password)
    return user
  } catch (error) {
    console.log(error)
    return error
  }

})





const loginSlice = createSlice({
  name: 'Login',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(LoginWithEmailAndPassWord.pending, (state) => {
        console.log('pending')
        state.isLoading = true
      })
      .addCase(LoginWithEmailAndPassWord.fulfilled, (state, action) => {
        console.log(action.payload)
        state.logedInUser = { ...action.payload, online: true }
      })
      .addCase(LoginWithEmailAndPassWord.rejected, (state, action) => {
        console.log('error', action.payload)
      })



  }
})

export const LoginReducers = loginSlice.reducer
export const selectLogedInUser = (state) => state.Login.logedInUser






