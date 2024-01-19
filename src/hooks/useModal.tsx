import React, {useEffect, useState} from 'react';
import {instance} from "../api/api";

export const useModal = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>('')

    instance.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            setErrorMessage(error.message)
            return Promise.reject(error)
        }
    )

    useEffect(() => {
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }, [errorMessage]);

    return errorMessage
};
