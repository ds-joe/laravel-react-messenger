// Dependencies
import { createSlice } from "@reduxjs/toolkit";

// Init State 
import { initialState } from "../initState/layoutSettings";

// Actions
import layoutSettingsActions from "../actions/layoutSettings";

const layoutSettingsSlice = createSlice({
  name: 'layoutSettings',
  initialState,
  reducers: layoutSettingsActions,
})

// Action creators are generated for each case reducer function
export const { setTheme } = layoutSettingsSlice.actions;

export default layoutSettingsSlice.reducer