import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "components/MentorSlotPage/MentorSlotPageTableSlice";

export default configureStore({
  reducer: {
    post: PostReducer,
  },
});
