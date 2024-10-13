import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { request } from "../requests/commons";

const initialState = {
  items: {},
  isLoading: false,
};

export const getGeoItems = createAsyncThunk(
  "geoItems/getGeoItems",
  async (_, thunkAPI) => {
    try {
      const items = await request();
      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message || "Unknown error");
    }
  }
);

const geoItemsSlice = createSlice({
  name: "geoItems",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getGeoItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGeoItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getGeoItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default geoItemsSlice.reducer;
