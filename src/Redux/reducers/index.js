import { combineReducers } from "@reduxjs/toolkit";
import productReducer from './../Slices/ProductSlice'

const rootReducer=combineReducers({
    productDetails:productReducer
})

export default rootReducer