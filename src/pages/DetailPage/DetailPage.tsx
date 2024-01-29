import React, {useEffect} from 'react';
import {Error} from "../../components/Error/Error";
import {Detail} from "../../components/Detail/Detail";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {Loader} from "../../components/Loader/Loader";
import {useParams} from "react-router-dom";
import { useGetItemDetailQuery } from '../../api/api';
import { fetchItem } from '../../components/Detail/detail-reducer';



export const DetailPage = () => {
    const {id} = useParams()
    const { data, error, isLoading } = useGetItemDetailQuery(id as string)
    const {item} = useSelector((state: AppRootStateType) => state.detail)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(data && data.content) {
         dispatch(fetchItem(data.content))
        }
     }, [data, dispatch])

     if (isLoading) {
        return <Loader />
    }

    if (error && 'error' in error) {
        return <Error text={error.error} />; 
    }

    if (item) {
        return <Detail item={item} />
    }

    return <Error text="Товар отсутствует" />
};
