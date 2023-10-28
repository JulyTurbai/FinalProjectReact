import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
    },
    
    reducers: {
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload)
        },
        updateBalans(state, action) {
            const cardToUpdate = state.cards.find(card => card.number === action.payload.number);
            if (cardToUpdate) {
                cardToUpdate.balans = action.payload.newBalans + ' ' + 'UAH';
            }
        },
    }
});

export const { updateBalans, addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;