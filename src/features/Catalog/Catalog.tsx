import styles from './Catalog.module.css'
import {FC, useEffect, useState} from "react";
import {getItemsCatalog} from "../../api/api";
import like from '../../assets/icons/like.svg'
import {BASE_URL} from "../../api/constansts";
import {NavLink} from "react-router-dom";
import {ProductType} from "../../types/index";
import {Error} from "../../components/Error/Error";


type PropsType = {
    searchQuery: string
}

export const Catalog: FC<PropsType> = ({searchQuery}) => {
    const [items, setItems] = useState<ProductType[]>([])
    const [error, setError] = useState<string | boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const products = await getItemsCatalog()
            if (products.error) {
                setError(products.error)
            } else if (products.data) {
                setItems(products.data)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const filteredProducts = items.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        setItems(filteredProducts)
    }, [searchQuery])

    return (
        <>
            {error || !items.length
                ? <Error error={error}/>
                : items.map((product) => (
                    <article className={styles.productElement} key={product.id}>
                        <button className={styles.productButton}>
                            <img className={styles.productIcon} src={like} alt='like'/>
                        </button>
                        <NavLink to={'/detail'} className={styles.productContent}>
                            <img className={styles.productImg} src={`${BASE_URL}${product.picture.path}`}
                                 alt={product.picture.alt}/>
                            <div className={styles.productName}>{product.name}</div>
                            <div className={styles.productPrice}>{product.price.value}</div>
                        </NavLink>
                    </article>
                ))}
        </>
    );
}



