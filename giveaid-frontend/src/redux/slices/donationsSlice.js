import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDonations } from '../../services/donations';

export const fetchDonations = createAsyncThunk('donations/fetchDonations', async () => {
  const response = await getDonations();
  return response;
});

const donationsSlice = createSlice({
  name: 'donations',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDonations.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDonations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default donationsSlice.reducer;

