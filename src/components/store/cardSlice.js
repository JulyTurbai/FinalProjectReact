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
        changeCardBalans(state, action) {
            const cardToUpdate = state.cards.find(card => card.number === action.payload.number);
            if (cardToUpdate) {
                const newBalans = action.payload.newBalans;
                const time = new Date().toISOString();
                cardToUpdate.balanceHistory.push({ amount: newBalans, time });
                cardToUpdate.balans = newBalans + ' UAH';
            }
        },
    }
});

export const { changeCardBalans, addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;