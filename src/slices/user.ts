import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IUser {
    title: string;
    description: string;
}
const initialState: IUser = {
    title: "initial title",
    description: "initial description"
}


export const userSlice = createSlice({
    name: 'users',
    initialState,
    //reducer with bunch of action creators
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }

})