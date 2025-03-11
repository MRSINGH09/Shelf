import { createSlice } from '@reduxjs/toolkit'

export const modeSlice=createSlice({
    initialState:{value:'Admin'},
    name:'modeSlice',
    reducers:{
        changeMode:(state,action)=>{
            state.value=action.payload
        }
    }
})

export const {changeMode}=modeSlice.actions