import React, {FC, useEffect, useMemo} from 'react';
import {Catalog} from "../../components/Catalog/Catalog";
import {Error} from "../../components/Error/Error";
import {Loader} from "../../components/Loader/Loader";
import {useGetItemsCatalogQuery} from '../../api/api';

type PropsType = {
    searchQuery: string
}

export const CatalogPage: FC<PropsType> = ({searchQuery}) => {
    const { data, error, isLoading } = useGetItemsCatalogQuery()

    const filteredProducts = useMemo(() => {
        if (data) {
            return data.content.filter((product) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        }
        return []
    }, [data, searchQuery])



    if (isLoading) {
        return <Loader />
    }

    if (error && 'error' in error) {
        return <Error text={error.error} />
    }

    if (data && data.content.length) {
        return <Catalog items={filteredProducts} />
    }

    return <Error text="Товары отсутствуют" />
}