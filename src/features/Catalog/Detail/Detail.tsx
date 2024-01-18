import styles from './Detail.module.css'
import {useEffect, useState} from "react";
import {getItemDetail} from "../../../api/api";
import {BASE_URL} from "../../../api/constansts";
import increment from '../../../assets/icons/increment.svg'
import decrement from '../../../assets/icons/decrement.svg'
import like from '../../../assets/icons/like.svg'
import {PictureType, PriceType} from "../Catalog";

type DetailType = {
    description: string
    details: string
    id: string
    info: string
    like: boolean
    name: string
    picture: PictureType
    price: PriceType
}

export const Detail = () => {
    const [item, setItem] = useState<DetailType | null>(null)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            const product = await getItemDetail(id)
            if (product.error) {
                setError(product.error)
            } else {
                setItem(product.data)
            }
        }
        fetchData()
    }, []);


    const handleError = (message: string) => {
        return <p className={styles.errorMessage}>{message}</p>
    }

    return (
        <>
            {!error && item
                ? (<div className={styles.detailedProduct}>
                    <div className={styles.detailedImg}>
                        <img src={`${BASE_URL}${item.picture.path}`} alt={item.picture.alt}/>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailDescription}>
                            <h1 className={styles.detailTitle}>{item.name}</h1>
                            <p className={styles.detailText}>${item.info}</p>

                            <h2 className={styles.detailSub}>Details</h2>
                            <p className={styles.detailText}>{item.details}</p>
                        </div>

                        <div className={styles.detailAdd}>
                            <div className={styles.detailPrice}>${item.price.value}</div>
                            <div className={styles.detailControls}>
                                <div className={styles.detailNumberGoods}>
                                    <button className={styles.detailDecrement}>
                                        <img src={decrement} alt="decrement"/>
                                    </button>
                                    <div className={styles.detailNumber}>1</div>
                                    <button className={styles.detailIncrement}>
                                        <img src={increment} alt="increment"/>
                                    </button>
                                </div>
                                <button className={styles.detailAddCart}>Add to cart</button>
                                <button className={styles.detailLike}>
                                    <img src={like} alt="like"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)
                : (
                    error ? handleError('Произошла ошибка при загрузке данных') : handleError('Товар отсутствует')
                )}
        </>
    )
}