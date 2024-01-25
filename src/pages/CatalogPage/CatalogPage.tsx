import React, {FC, useEffect} from 'react';
import {Catalog} from "../../components/Catalog/Catalog";
import {Error} from "../../components/Error/Error";
import {fetchItems, searchItemsCatalog} from "../../components/Catalog/catalog-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {Loader} from "../../components/Loader/Loader";


type PropsType = {
    searchQuery: string
}

export const CatalogPage: FC<PropsType> = ({searchQuery}) => {
    const {items, error, loading} = useSelector((state: AppRootStateType) => state.catalog);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    useEffect(() => {
        dispatch(searchItemsCatalog(items, searchQuery))
    }, [searchQuery])


    return (
        <>
            {loading && <Loader />}
            {!loading && (error || !items.length) && <Error text={error || 'Товары отсутствуют'} />}
            {!loading && !error && items.length && <Catalog items={items} />}
        </>
    );
};

