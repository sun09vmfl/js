/* 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 비동기 데이터 호출시 
  const 데이터명 = createAsyncThunk(
    "구별명/호출명",
    async() => {
      요청하고 객체를 리턴 받는 함수
    }
  );
  pending, fulfilled, rejected 상태를 가짐
*/

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fectchPixabay = createAsyncThunk('pixabay/requestPixabay', async () => {
  const response = await axios.get('https://pixabay.com/api/?key=키값&q=snow+night&image_type=photo');
  return response.data.hits;
});

/* 
export const 리듀서명 = createSlice({
  name:"",
  initialState: {},
  extraReducers: {
    [fectchPixabay.pending] : (state) => {},
    [fectchPixabay.fulfilled] : (state, action) => {},
    [fectchPixabay.rejected] : (state) => {},
  }
});
*/

export const pixabaySlice = createSlice({
  name: 'pixabay',
  initialState: {
    data: [],
  },
  extraReducers: {
    [fectchPixabay.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default pixabaySlice.reducer;
