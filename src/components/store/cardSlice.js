import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        cards: []
    },
    
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload)
        }
    }
});

export const { addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;