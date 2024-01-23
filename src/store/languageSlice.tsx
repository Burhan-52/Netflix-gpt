import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Language {
    language: string;
}

const initialState: Language = {
    language: "en"
};

const languageSlice = createSlice({
    name: "multiLanguage",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
        }
    }
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
