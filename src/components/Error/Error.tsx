import React, {FC} from 'react';
import styles from './Error.module.css'

type PropsType = {
    text: boolean | string
}

export const Error:FC<PropsType> = ({text}) => {
    return <p className={styles.errorMessage}>{text}</p>
}

