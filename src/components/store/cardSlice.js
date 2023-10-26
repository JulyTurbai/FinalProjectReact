import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
    },
    
    reducers: {
        addUser(state, action) {
            state.cards.push(action.payload)
        },
        addCard(state, action) {
            state.cards.push(action.payload)
        },
        deleteCard(state, action) {
            state.cards = state.cards.filter(card => card.id !== action.payload)
        }
    }
});

export const { addUser, addCard, deleteCard } = cardSlice.actions;
export default cardSlice.reducer;