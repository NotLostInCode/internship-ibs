import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "../../types";
import {AppThunk} from "../../app/store";

type ItemsType = {
    items: ProductType[]
    error: string | null
}
const initialState: ItemsType = {
    items: [],
    error: null
}

const slice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<{ items: ProductType[]}>) => {
          state.items = action.payload.items
        },
        setItemsSearch: (state, action: PayloadAction<{ items: ProductType[]; value: string }>) => {
            state.items = action.payload.items.filter(product =>
                product.name.toLowerCase().includes(action.payload.value.toLowerCase())
            )
        },
        setError: (state, action: PayloadAction<{error: string | null}>) => {
            state.error = action.payload.error
          },
    }
})

export const searchItemsCatalog = (items: ProductType[], value: string): AppThunk => {
    return dispatch => {
        dispatch(catalogActions.setItemsSearch({items, value}))
    }
}

export const fetchItems = (items: ProductType[]): AppThunk => {
    return dispatch => {
        dispatch(catalogActions.setItems({items}))
    }
}

export const setErrorMessage = (error: string | null): AppThunk => {
    return dispatch => {
        dispatch(catalogActions.setError({error}))
    }
}

export const catalogReducer = slice.reducer
export const catalogActions = slice.actions