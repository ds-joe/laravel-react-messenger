// Types
import { PayloadAction } from "@reduxjs/toolkit"
import type { LayoutSettingsInitStateProps } from "../types/LayoutSettings"
import daisy_ui from "daisyui/src/theming/themes";


export default {
  setTheme: (state: LayoutSettingsInitStateProps, action: PayloadAction<keyof typeof daisy_ui>) => {
    localStorage.setItem('layout-theme', action.payload);
    state.theme = action.payload;
  }
}