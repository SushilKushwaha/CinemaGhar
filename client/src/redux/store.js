import { configureStore } from '@reduxjs/toolkit';
import countSlice from './reducerSlice/userSlice';

export default configureStore({
  reducer: {
    count: countSlice
  },
});