import styles from './Catalog.module.css'
import {FC} from "react";
import like from '../../assets/icons/like.svg'
import {BASE_URL} from "../../api/constansts";
import {NavLink} from "react-router-dom";
import {ProductType} from "../../types";
import {Error} from "../Error/Error";


type PropsType = {
    items: ProductType[]
}

export const Catalog: FC<PropsType> = ({items}) => {
    return (
        <>
            {!items.length
                ? <Error text={'Товары отсутсвуют'}/>
                : items.map((product) => (
                    <article className={styles.productElement} key={product.id}>
                        <button className={styles.productButton}>
                            <img className={styles.productIcon} src={like} alt='like'/>
                        </button>
                        <NavLink to={'/detail'} className={styles.productContent}>
                            <img
                                className={styles.productImg}
                                src={`${BASE_URL}${product.picture.path}`}
                                alt={product.picture.alt}
                            />
                            <div className={styles.productName}>{product.name}</div>
                            <div className={styles.productPrice}>{product.price.value}</div>
                        </NavLink>
                    </article>
                ))
            }
        </>
    );
};



