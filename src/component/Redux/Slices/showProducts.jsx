import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
      
            const { id, quantity=1,image,price,name,category } = action.payload;
            const item = state.products.find(item => item.id === id);
            if (item) {
                item.quantity += quantity;
            } else {
                state.products.push({ id, quantity,image,price,name,category  });
            }
            
        },
        removeProduct:(state,action)=>{
          const { id } = action.payload;
            state.products = state.products.filter(item => item.id !== id);
        }
    },
});

export const { addProduct ,removeProduct} = productSlice.actions;
export default productSlice.reducer;