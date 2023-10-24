import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'users',
    initialState: {
        cards: []
    },
    
    reducers: {
        addCard(state, action) {
            state.users.push(action.payload)
        },
        deleteCard(state, action) {
            state.users = state.users.filter(card => card.id !== action.payload)
        }
    }
});

export const { addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;