import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: localStorage?.getItem("user"),
  reducers: {
    saveUser: (state, action) => {
      return action.payload;
    },
    deleteUser: (state) => {
      return (state = undefined);
    },
  },
});

export const getMe = (state) => state.user;
export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
