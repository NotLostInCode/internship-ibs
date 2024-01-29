import React, {FC, useEffect} from 'react';
import {Catalog} from "../../components/Catalog/Catalog";
import {Error} from "../../components/Error/Error";
import {fetchItems, searchItemsCatalog} from "../../components/Catalog/catalog-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Loader} from "../../components/Loader/Loader";
import { useGetItemsCatalogQuery } from '../../api/api';

type PropsType = {
    searchQuery: string
}

export const CatalogPage: FC<PropsType> = ({searchQuery}) => {
   
    const { data, error, isLoading } = useGetItemsCatalogQuery()
    const {items} = useSelector((state: AppRootStateType) => state.catalog);
    const dispatch = useAppDispatch()

    useEffect(() => {
       if(data && data.content) {
        dispatch(fetchItems(data.content))
       }
    }, [data, dispatch])

    useEffect(() => {
        dispatch(searchItemsCatalog(items, searchQuery))
    }, [searchQuery])



    if (isLoading) {
        return <Loader />
    }

    if (error && 'error' in error) {
        return <Error text={error.error} />
    }

    if (items.length) {
        return <Catalog items={items} />
    }

    return <Error text="Товары отсутствуют" />
}