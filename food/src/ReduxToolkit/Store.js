import {configureStore} from '@reduxjs/toolkit'
import getReducer from './StoreSlice'
const store = configureStore({
    reducer : {
        allCart : getReducer    
    }
})

export default store;