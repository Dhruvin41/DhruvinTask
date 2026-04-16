// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'
// import dataSlice from './dataSlice'

// const store = configureStore({
//     reducer: rootReducer,
//     dataSlice : dataSlice
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import paymentsReducer from './paymentSlice.js'

 const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    payments : paymentsReducer
  },
});

export default store;

