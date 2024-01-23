import { createSlice } from "@reduxjs/toolkit";

export interface User {
  uid: number;
  email: string;
  displayName: string;
}

const userSlice = createSlice({
  name: "user",
  initialState: null as User | null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
