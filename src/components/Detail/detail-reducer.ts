import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DetailType} from "../../types";
import {getItemDetail} from "../../api/api";

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

export const fetchItem = createAsyncThunk('item/fetchItem', async (id: string) => {
    const response = await getItemDetail(id);
    return response.data.content;
})

const slice = createSlice({
    name: 'detail',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchItem.fulfilled, (state, action) => {
                state.item = action.payload
                state.loading = false
            })
            .addCase(fetchItem.rejected, (state, action) => {
                state.error = action.error.message ? action.error.message : 'Ошибка при получении данных'
                state.loading = false
            })
            .addCase(fetchItem.pending, (state, action) => {
                state.loading = true
            })
    }
})

export const detailReducer = slice.reducer
export const detailActions = slice.actions