import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  answers: {},
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    submitAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      state.answers[questionId] = answer;
    },
    resetSurvey: (state) => {
      state.answers = {};
    },
  },
});

export const { submitAnswer, resetSurvey } = surveySlice.actions;

export default surveySlice.reducer;

