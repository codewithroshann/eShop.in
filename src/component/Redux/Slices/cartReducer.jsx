import { createSlice } from '@reduxjs/toolkit';
const saveToLocalStorage = (state) => {
    localStorage.setItem('cartProducts', JSON.stringify(state));
};

const storedProduct = JSON.parse(localStorage.getItem('cartProducts'));
const initialState = {
    items: storedProduct.items || []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity = 1, image, price, name, link } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity += quantity;
            } else {
                state.items.push({ id, quantity, image, price, name, link });
            }
            saveToLocalStorage(state);
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            saveToLocalStorage(state);
        },
        increaseQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity + 1;
            }
            saveToLocalStorage(state);
        },
        decreaseQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item.quantity > 1) {
                item.quantity = quantity - 1;
            } else {
                state.items = state.items.filter(item => item.id !== id)
            }
            saveToLocalStorage(state);
        },
        clearAllItems: (state) => {
            state.items = []
            saveToLocalStorage(state);
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearAllItems } = cartSlice.actions;

export default cartSlice.reducer;
