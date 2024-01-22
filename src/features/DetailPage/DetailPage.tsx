import React, {useEffect, useState} from 'react';
import {DetailType} from "../../types";
import {getItemDetail} from "../../api/api";
import {Error} from "../../components/Error/Error";
import {Detail} from "../../components/Detail/Detail";

export const DetailPage = () => {
    const [item, setItem] = useState<DetailType | null>(null)
    const [error, setError] = useState<boolean | string>(false)

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            const product = await getItemDetail(id)
            if (product.error) {
                setError(product.error)
            } else if (product.data) {
                setItem(product.data)
            }
        }
        fetchData()
    }, []);
    return (
        <>
            {error ? <Error text={error}/> : <Detail item={item}/>}
        </>
    );
};
