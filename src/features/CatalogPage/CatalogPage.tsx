import React, {FC, useEffect, useState} from 'react';
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

    useEffect(() => {
        const filteredProducts = items.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setItems(filteredProducts)
    }, [searchQuery])


    return (
        <>
            {error ? <Error text={error}/> : <Catalog items={items}/>}
        </>
    );
};

