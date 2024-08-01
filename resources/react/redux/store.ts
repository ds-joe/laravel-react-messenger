// Dependencies
import { configureStore } from '@reduxjs/toolkit'

// Slicers
import layoutSettingsSlice from './slicers/layoutSettings'

export const store = configureStore({
  reducer: {
    layoutSettingsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
