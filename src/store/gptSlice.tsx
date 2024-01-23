import { createSlice } from "@reduxjs/toolkit";

interface GptState {
    showGptSearch: boolean
}

const initialState: GptState = {
    showGptSearch: false
}

const gptSlice = createSlice({
    name: "gptSearch",
    initialState,
    reducers: {
        viewGptPage: (state) => {
            state.showGptSearch = !state.showGptSearch
        }
    }
})

export const { viewGptPage } = gptSlice.actions

export default gptSlice.reducer