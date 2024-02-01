import styles from './Catalog.module.css'
import {FC} from "react";
import {BASE_URL} from "../../api/constansts";
import {NavLink} from "react-router-dom";
import {ProductType} from "../../types";
import {Like} from "../Like/Like";


type PropsType = {
    items: ProductType[]
}

export const Catalog: FC<PropsType> = ({items}) => {

    return (
        <>
            {items.map((product, index) => (
                <article className={styles.productElement} key={product.id}>
                    <div className={styles.productLike}>
                        <Like/>
                    </div>
                    <NavLink to={`/detail/${product.id}`} className={styles.productContent}>
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


