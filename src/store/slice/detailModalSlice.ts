import { createSlice } from '@reduxjs/toolkit'

const initialState = { allowExit: true };

const detailModalSlice = createSlice({
    name: 'detailModal',
    initialState: initialState,
    reducers: {
        blockExit(state) {
            state.allowExit = false;
        },
        allowExit(state) {
            state.allowExit = true;
        }
    },
})

export const { blockExit, allowExit } = detailModalSlice.actions
export default detailModalSlice.reducer

export const selectDetailModal = (state: any) => {
    return state.detailModal.allowExit;
  };