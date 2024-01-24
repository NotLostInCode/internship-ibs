import React, {useEffect} from 'react';
import {Error} from "../../components/Error/Error";
import {Detail} from "../../components/Detail/Detail";
import {fetchItem} from "../../components/Detail/detail-reducer";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {Loader} from "../../components/Loader/Loader";
import {useParams} from "react-router-dom";



export const DetailPage = () => {
    const {item, error, loading} = useSelector((state: AppRootStateType) => state.detail)
    const dispatch = useAppDispatch()
    let {id} = useParams()

    useEffect(() => {
        if(id) {
            dispatch(fetchItem(id))
        }
    }, [dispatch, id])


    return (
        <>
            <Loader loading={loading} />
            {!loading && (error || !item) && <Error text={error || 'Товар отсутствует'} />}
            {!loading && !error && item && <Detail item={item} />}
        </>
    );
};
