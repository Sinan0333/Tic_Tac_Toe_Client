import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    _id:"",
    name:"",
    email:"",
}


const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails: (state,action)=>{
            state._id = action.payload._id;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logoutUser :(state)=>{
            state._id = "";
            state.name = "";
            state.email = "";
        }
    }
})


export const{setUserDetails,logoutUser} = userSlice.actions
export default userSlice.reducer