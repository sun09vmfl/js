import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { num: 0 },
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
    reset: (state) => {
      state.num = 0;
    },
  },
});

// 각 리듀서의 액션 설정
export const { increment, decrement, reset } = counterSlice.actions;

// slice 내보냄
export default counterSlice.reducer;
