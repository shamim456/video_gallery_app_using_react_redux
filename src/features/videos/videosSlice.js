import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

// initial state
const INITIAL_STATE = {
  isLoading: false,
  videos: [],
  isError: false,
  error: "",
};

// thunk function
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  let videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.error = action.error?.message;
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
      });
  },
});

export default videosSlice.reducer;
