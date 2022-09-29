import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts", async () => {
  return fetch(
    "https://6331a1443ea4956cfb635d5f.mockapi.io/api/test/SlotList" //lấy các cột từ slot của mentor
  ).then((res) => res.json());
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
