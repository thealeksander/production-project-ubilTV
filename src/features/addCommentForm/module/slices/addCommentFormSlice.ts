import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentFormSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(loginByUserName.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(loginByUserName.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(loginByUserName.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
