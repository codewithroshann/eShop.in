import { createSlice, current } from '@reduxjs/toolkit';



const alertSlice = createSlice({
    name: 'alert',
    initialState: {
        message: null,
        type: null,
        visible: false
    },
    reducers: {
        setAlert: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
            state.visible = true
        },
        clearAlert: (state) => {
            state.message = '';
            state.type = '';
            state.visible = false;
        },

    }
})
export const { setAlert, clearAlert } = alertSlice.actions;

export default alertSlice.reducer;