import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../app/store';
import { useAppDispatch } from './useAppDispatch';
import { setErrorMessage } from '../components/Catalog/catalog-reducer';


export const useModal = () => {
    const errorMessage = useSelector((state: AppRootStateType) => state.catalog.error)
    const dispatch = useAppDispatch()
    

    useEffect(() => {
        setTimeout(() => {
            dispatch(setErrorMessage(null))
        }, 5000)
    }, [errorMessage]);

    return errorMessage
};
