// Dependencies

import { configureStore } from '@reduxjs/toolkit'

// Slicers
import layoutSettingsSlice from './slicers/layoutSettings'
import chatsSlice from './slicers/chats'


export const store = configureStore({
  reducer: {
    layoutSettingsSlice,
    chatsSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
