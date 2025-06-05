import { createSlice } from '@reduxjs/toolkit';
import { ProfilSchema } from '../types/profile';

const initialState: ProfilSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
