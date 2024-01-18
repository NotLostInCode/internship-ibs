import styles from './Modal.module.css';
import {FC} from "react";

interface ModalProps {
    message: string;
}

export const Modal:FC<ModalProps> = ({ message }) => {
    return <div className={`${styles.show} ${styles.snackbar}`}>{message}</div>;
};
