import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookmarkList: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    clearBookmarks: (state) => {
      state.bookmarkList = [];
    },
    addToBookmark: (state, { payload }) => {
      const newItem = payload;
      if (!state.bookmarkList.map((item) => item.id).includes(payload.id)) {
        state.bookmarkList.push({
          id: newItem.id,
          title: newItem.title || newItem.name,
          overview: newItem.overview,
          release: newItem.first_air_date || newItem.release_date,
          backdrop_path: newItem.backdrop_path || newItem.poster_path,
        });
        // return state.bookmarkList;
      }
    },
    removeBookmark: (state, { payload }) => {
      const updatedBookmarkList = state.bookmarkList.filter(
        (item) => item.id !== payload
      );
      state.bookmarkList = updatedBookmarkList;
    },
  },
});

export const { addToBookmark, removeBookmark, clearBookmarks } =
  bookmarkSlice.actions;

export default bookmarkSlice.reducer;
