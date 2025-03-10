import { createSlice } from '@reduxjs/toolkit'

export const searchSlice=createSlice({
    initialState:{value:""},
    name:"searchInputValue",
    reducers:{
        setValue:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {setValue}=searchSlice.actions