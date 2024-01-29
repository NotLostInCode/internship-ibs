import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import {DetailType} from "../../types";
import {AppThunk} from "../../app/store";

type ItemType = {
    item: DetailType
    error: string
    loading: boolean
}

const initialState: ItemType = {
    item: {} as DetailType,
    error: '',
    loading: false,
}

const slice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        setItem:(state, action:PayloadAction<{item: DetailType}>) => {
            state.item = action.payload.item
        }
    },
})

export const fetchItem = (item: DetailType): AppThunk => {
    return dispatch => {
        dispatch(detailActions.setItem({item}))
    }
}


export const detailReducer = slice.reducer
export const detailActions = slice.actions