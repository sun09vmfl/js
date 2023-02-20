import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import pixabayReducer from "./pixabaySlice";

// 스토어 생성
export const store = configureStore({
  reducer: {
    // name값을 키로 사용
    pixabay: pixabayReducer,
    counter: counterReducer,
  },
});

export default store;
