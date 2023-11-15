import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'

import { getDefaultMiddleware } from '@reduxjs/toolkit'

// const logger = createLogger()

const store = configureStore({
    reducer: {
        cake:cakeReducer,
        iceCream:iceCreamReducer,
        user:userReducer,
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store