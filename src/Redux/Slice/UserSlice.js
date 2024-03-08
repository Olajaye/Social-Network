import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUserFromDatabase } from "../../FirebaseConfig/Firebase";


const initialState = {
  allUser: [],
  inidividualUser: [],
}

export const getAllUserDatabase = createAsyncThunk('get/getAllUserFromDatabase', async () => {
  try {
    let allUser = await getAllUserFromDatabase()
    allUser = allUser.docs.map(doc => ({ ...doc.data(), docId: doc.id }))
    return allUser
  } catch (error) {
    return error.message
  }
})





const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserDatabase.fulfilled, (state, action) => {
        state.allUser = action.payload
      })
  }
})



const UserReducer = userSlice.reducer
export const userAction = userSlice.actions
export const selectAllUsers = (state) => state.User.allUser
export const selectIndividualUsers = (state) => state.User.inidividualUser
export default UserReducer