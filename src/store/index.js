import { configureStore } from "@reduxjs/toolkit";
import bookmarkReduder from "./bookmarkSlice";

const store = configureStore({
  reducer: {
    bookmark: bookmarkReduder,
  },
});

export default store;
