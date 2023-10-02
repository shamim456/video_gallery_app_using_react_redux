import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

// initial state
const INITIAL_STATE = {
  relatedVideo: [],
  isLoading: false,
  isError: false,
  error: "",
};

// thunk function
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    // console.log(tags + "shamim");
    const relatedVideo = await getRelatedVideos({ tags, id });
    return relatedVideo;
  }
);

const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.relatedVideo = [];
      });
  },
});

export default relatedVideoSlice.reducer;
