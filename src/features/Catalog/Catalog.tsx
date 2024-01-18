import styles from './Catalog.module.css'
import {FC, useEffect, useState} from "react";
import {getItemsCatalog} from "../../api/api";
import like from '../../assets/icons/like.svg'
import {BASE_URL} from "../../api/constansts";
import {NavLink} from "react-router-dom";


type PropsType = {
    searchQuery: string
}
export type ProductType = {
    description: string
    id: string
    like: boolean
    name: string
    picture: PictureType
    price: PriceType
}
export type PictureType = {
    alt: string
    path: string
}
export type PriceType = {
    currency: string
    value: number
}


export const Catalog: FC<PropsType> = ({searchQuery}) => {
    const [items, setItems] = useState<ProductType[]>([])
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        const fetchData = async () => {
            const products = await getItemsCatalog()

            if (products.error) {
                setError(products.error)
            } else {
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


    const handleError = (message: string) => {
        return <p className={styles.errorMessage}>{message}</p>
    }

    return (
        <>
            {!error && items.length !== 0 ? (
                items.map((product) => (
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
                ))
            ) : (
                error ? handleError('Произошла ошибка при загрузке данных') : handleError('Товары отсутствует')
            )}
        </>
    );
}