import { createSlice } from "@reduxjs/toolkit";

// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

const counterSlice = createSlice({
    name:"counterApp",
    initialState:{
        value:0
    },
     //actions are created inside this reducers key as objects
    reducers:{
        //logic to udpate the state

        //function to increment the value
        incrment:(state,action)=>{
            state.value+=action.payload
        },
        //function to decrement the value
        decrement:(state,action)=>{
            state.value-=action.payload
        },
        //function to reset the value
        reset:(state)=>{
            state.value=0
        },
    }
})
//action is required by component to update the state

export const {incrment,decrement,reset}=counterSlice.actions

//reducer is required by store to change the state value
export default counterSlice.reducer