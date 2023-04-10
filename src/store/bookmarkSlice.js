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
    addToBookmark(state, { payload }) {
      const newItem = payload;
      if (!state.bookmarkList.map((item) => item.id).includes(payload.id)) {
        state.bookmarkList.push({
          id: newItem.id,
          title: newItem.title || newItem.name,
          overview: newItem.overview,
          release: newItem.first_air_date || newItem.release_date,
          image: `https://www.themoviedb.org/t/p/w220_and_h330_face/${newItem.poster_path}`,
        });
      }
    },
    removeBookmark(state, { payload }) {
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
