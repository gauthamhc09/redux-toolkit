import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modelOpen: (state) => {
            state.isOpen = true
        },
        modelClose: (state) => {
            state.isOpen = false
        }
    }
})

export const { modelOpen, modelClose } = modalSlice.actions
export default modalSlice.reducer