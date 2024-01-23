import React, {FC, useEffect, useMemo, useState} from 'react';
import {ProductType} from "../../types";
import {getItemsCatalog} from "../../api/api";
import {Catalog} from "../../components/Catalog/Catalog";
import {Error} from "../../components/Error/Error";

type PropsType = {
    searchQuery: string
}

export const CatalogPage: FC<PropsType> = ({searchQuery}) => {
    const [items, setItems] = useState<ProductType[]>([])
    const [error, setError] = useState<string | boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const products = await getItemsCatalog()
            if (products.error) {
                setError(products.error)
            } else if (products.data) {
                setItems(products.data)
            }
        }
        fetchData()
    }, [])

    const filteredProducts = useMemo(() => {
        return items.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

    }, [items, searchQuery])


    return (
        <>
            {error || !items.length ? <Error text={error as string}/> : <Catalog items={filteredProducts}/>}
        </>
    );
};

