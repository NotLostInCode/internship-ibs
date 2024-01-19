import React, {FC} from 'react';
import styles from './Error.module.css'

type PropsType = {
    error: boolean | string
}

export const Error:FC<PropsType> = ({error}) => {
    if(error) {
       return <p className={styles.errorMessage}>{'Произошла ошибка при загрузке данных'}</p>
    } else {
        return <p className={styles.errorMessage}>{'Товары отсутствуют'}</p>
    }
};

