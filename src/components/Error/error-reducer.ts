import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../types";
import {AppThunk} from "../../app/store";

type ItemsType = {
    error: string | null
}
const initialState: ItemsType = {
    error: null
}

const slice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<{error: string | null}>) => {
            state.error = action.payload.error
          }
    }
})

export const setErrorMessage = (error: string | null): AppThunk => {
    return dispatch => {
        dispatch(catalogActions.setError({error}))
    }
}

export const errorReducer = slice.reducer
export const catalogActions = slice.actions