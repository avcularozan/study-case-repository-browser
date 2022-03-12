import { createSlice } from '@reduxjs/toolkit'
import { initialRepoStoreData } from './type'

export const repoSlice = createSlice({
  name: 'repo',
  initialState: initialRepoStoreData,
  reducers: {
    setStoreRepo: (state, action) => ({
      ...state,
      ...action.payload
    }),
    resetStoreRepo: (state) => ({
      ...state,
      ...initialRepoStoreData
    })
  }
})

export const repoValue = (state) => state.repoSlice

export const { setStoreRepo, resetStoreRepo } = repoSlice.actions

export default repoSlice.reducer
