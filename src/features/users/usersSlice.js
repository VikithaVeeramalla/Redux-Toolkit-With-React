import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "author1" },
  { id: "1", name: "author2" },
  { id: "2", name: "author3" }
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
