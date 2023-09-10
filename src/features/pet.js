import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "pet",
    initialState: {
        petInfo: null,
        message: ''
    },
    reducers: {
        updatePetInfo: (state, action) => {
            state.petInfo = action.payload;
        },
        updateMessage: (state, action) => {
            state.message = action.payload;
        },
    }
})

export const {updatePetInfo,updateMessage} = userSlice.actions;

export default userSlice.reducer;