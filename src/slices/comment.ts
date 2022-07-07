import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
interface IComment {
    title: string;
    description: string;
}

const initialState: IComment = {
    title: "initial title",
    description: "initial description"
}

export const commentSlice = createSlice({
    name: 'comments',
    initialState,
    //reducer with bunch of action creators
    reducers: {
        updateTitle: (state, action: PayloadAction<string>) => {
            //state can be directly mutated here as it is using immuer
            state.title = action.payload;
        }
    }

})

export const { updateTitle } = commentSlice.actions;
export default commentSlice.reducer;