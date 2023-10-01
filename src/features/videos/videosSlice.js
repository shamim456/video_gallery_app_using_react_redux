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
  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        const { isError, isLoading } = state;
        isError = false;
        isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        const { isLoading, videos } = state;
        isLoading = false;
        videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        const { isError, isLoading, videos, error } = state;
        error = action.error?.message;
        isLoading = false;
        isError = true;
        videos = [];
      });
  },
});

export default videosSlice.reducer;
