import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store=configureStore({
    
    //reducer can only update the state in store
    //reducer key is predefined (object which can hold more than one reducer)
    // createAction for creating action- standalone function
    // createReducer for creating reducer- standalone function
    //configureStore for creating store- standalone function
    reducer:{
        //reducer is coming from counterSlice since we export reducer as export default counterSlice.reducer
        counter:counterSlice
    }

})