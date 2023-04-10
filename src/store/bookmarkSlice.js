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
      state.bookmarkList = payload
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
export const getAllBookmarks = (state) => state.bookmarkList.bookmarkList
export default bookmarkSlice.reducer;
