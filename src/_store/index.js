import { configureStore } from '@reduxjs/toolkit'
import combinedSlices from './slices'

const resetAction = { type: 'reset' }

const rootSlices = (state, action) => {
  if (action === resetAction) state = undefined
  return combinedSlices(state, action)
}

export const store = configureStore({
  reducer: rootSlices
})

export const resetStore = () => resetAction
