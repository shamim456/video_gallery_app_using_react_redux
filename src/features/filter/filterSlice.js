import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  tags: [],
  searched: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: INITIAL_STATE,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    search: (state, action) => {
      state.searched = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, search } = filterSlice.actions;
