import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authSliceReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSliceReducer,
  },
});




export default store;
