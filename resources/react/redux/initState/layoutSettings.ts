// Types
import type { LayoutSettingsInitStateProps } from "../types/LayoutSettings"

export const initialState: LayoutSettingsInitStateProps = {
  theme: localStorage.getItem('layout-theme') as any ?? 'night',
}

