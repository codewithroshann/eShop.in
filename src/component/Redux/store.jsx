import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/cartReducer'
import productReducer from './Slices/showProducts'
import alertReducer from './Slices/alertReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
   showProducts:productReducer,
   alert:alertReducer
  },
})
export default store;
 