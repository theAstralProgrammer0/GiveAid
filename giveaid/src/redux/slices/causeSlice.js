/* src/redux/slices/causeSlice.js */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

export const fetchCauses = createAsyncThunk('cause/fetchCauses', async () => {
  const response = await api.get('/causes');
  return response.data;
});

const causeSlice = createSlice({
  name: 'cause',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCauses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCauses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCauses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default causeSlice.reducer;

