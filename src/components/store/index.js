import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    
    reducers: {
        addCard(state, action) {
            state.push(action.payload)
        }
    }
});

export default configureStore({
    reducer: {
    cards: cardSlice.reducer
    }
});

export const { addCard } = cardSlice.actions;

