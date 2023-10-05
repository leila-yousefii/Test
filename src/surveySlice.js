import { createSlice } from '@reduxjs/toolkit';
import {resetSurvey, submitAnswer } from './actions';

const initialState = {
  answers: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAnswer,(state,action)=>{
        const { questionId, answer } = action.payload;
        state.answers[questionId] = answer;
      })
      .addCase(resetSurvey,(state)=>{
        state.answers = {};
      })
      }
});


export default surveySlice.reducer;

