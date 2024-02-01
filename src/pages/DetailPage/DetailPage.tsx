import React from 'react';
import {Error} from "../../components/Error/Error";
import {Detail} from "../../components/Detail/Detail";
import {Loader} from "../../components/Loader/Loader";
import {useParams} from "react-router-dom";
import { useGetItemDetailQuery } from '../../api/api';



export const DetailPage = () => {
    const {id} = useParams()
    const { data, error, isLoading } = useGetItemDetailQuery(id as string)

     if (isLoading) {
        return <Loader />
    }

    if (error && 'error' in error) {
        return <Error text={error.error} />; 
    }

    if (data) {
        return <Detail item={data.content} />
    }

    return <Error text="Товар отсутствует" />
};
