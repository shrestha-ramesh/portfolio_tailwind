import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenicated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isAuthenicated = action.payload.isAuthenicated;
      state.user = action.payload.user;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
