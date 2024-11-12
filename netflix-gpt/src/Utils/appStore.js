import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./userSlice.js"
const appstore=configureStore({
    reducer:{
            user:UserReducer,
    }
})
export default appstore;