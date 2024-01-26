import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../types";
import {getItemsCatalog} from "../../api/api";
import {AppThunk} from "../../app/store";

type ItemsType = {
    items: ProductType[]
    error: string
    loading: boolean
}

const initialState: ItemsType = {
    items: [],
    error: '',
    loading: false,
}

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await getItemsCatalog();
    return response.data.content;
})

const slice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setItemsSearch: (state, action: PayloadAction<{ items: ProductType[]; value: string }>) => {
            state.items = action.payload.items.filter(product =>
                product.name.toLowerCase().includes(action.payload.value.toLowerCase())
            )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload
                state.loading = false
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.error = 'Ошибка при получении данных'
                state.loading = false
            })
            .addCase(fetchItems.pending, (state, action) => {
                state.loading = true
            })
    }
})

export const searchItemsCatalog = (items: ProductType[], value: string): AppThunk => {
    return dispatch => {
        dispatch(catalogActions.setItemsSearch({items, value}))
    }
}

export const catalogReducer = slice.reducer
export const catalogActions = slice.actions