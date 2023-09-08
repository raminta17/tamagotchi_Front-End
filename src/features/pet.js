import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "pet",
    initialState: {
        pet: '',
        money: 0,
        hunger: null,
        eggs: []
    },
    reducers: {
        updatePet: (state, action) => {
            state.pet = action.payload;
        },
        updateMoney: (state, action) => {
            state.money = action.payload;
        },
        updateHunger: (state, action) => {
            state.hunger = action.payload;
        },
        updateEggs: (state, action) => {
            state.eggs = action.payload;
        },
    }
})

export const {updatePet,updateMoney,updateHunger, updateEggs} = userSlice.actions;

export default userSlice.reducer;