import {Action, configureStore} from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {catalogReducer} from "../components/Catalog/catalog-reducer";
import {detailReducer} from "../components/Detail/detail-reducer";
import { items } from '../api/api';


const rootReducer = combineReducers({
    catalog: catalogReducer,
    detail: detailReducer,
    [items.reducerPath]: items.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(items.middleware),
});

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, Action>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, Action>


