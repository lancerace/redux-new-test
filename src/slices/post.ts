import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IPost {
    title: string;
    description: string;
}
const initialState: IPost = {
    title: "initial title",
    description: "initial description"
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    //reducer with bunch of action creators
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        }
    }

})